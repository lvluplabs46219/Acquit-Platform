"""
Acquit Platform - Multi-Provider LLM Router
Default: local Ollama (real HTTP). Optional OpenAI/Anthropic/Mistral fallbacks.
"""

from __future__ import annotations

import json
import os
import time
import urllib.error
import urllib.request
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional

from security.audit import AuditLogger
from security.permissions import PermissionGuard, SensitivityLevel


@dataclass
class ProviderConfig:
    name: str
    model: str
    base_url: str = ""
    timeout: int = 60
    max_retries: int = 3
    cost_per_token: float = 0.0
    avg_latency: float = 1.0
    capabilities: List[str] = field(default_factory=list)


class LLMRouter:
    DEFAULT_CONFIG = {
        "providers": {
            "local_ollama": {
                "name": "local_ollama",
                "model": os.environ.get("OLLAMA_MODEL", "llama3.2"),
                "base_url": os.environ.get("OLLAMA_BASE_URL", "http://127.0.0.1:11434"),
                "cost_per_token": 0.0,
                "avg_latency": 0.3,
                "timeout": 120,
                "capabilities": [
                    "text_generation",
                    "case_data_processing",
                    "private_processing",
                ],
            },
            "anthropic": {
                "name": "anthropic",
                "model": "claude-3-opus-20240229",
                "cost_per_token": 0.00002,
                "avg_latency": 1.2,
                "capabilities": ["text_generation", "reasoning", "long_context"],
            },
            "openai": {
                "name": "openai",
                "model": "gpt-4o-mini",
                "cost_per_token": 0.00001,
                "avg_latency": 1.0,
                "capabilities": ["text_generation", "code_generation", "json_mode"],
            },
            "mistral": {
                "name": "mistral",
                "model": "mistral-large-latest",
                "cost_per_token": 0.000008,
                "avg_latency": 0.8,
                "capabilities": ["text_generation", "multilingual"],
            },
        },
        # Ollama first — never prefer Gemini in this stack
        "fallback_chain": ["local_ollama", "openai", "anthropic", "mistral"],
    }

    def __init__(
        self,
        config: Optional[Dict[str, Any]] = None,
        audit_logger: Optional[AuditLogger] = None,
        permission_guard: Optional[PermissionGuard] = None,
    ):
        self.config = config or self.DEFAULT_CONFIG
        self.audit_logger = audit_logger or AuditLogger()
        self.permission_guard = permission_guard or PermissionGuard()
        self.providers: Dict[str, ProviderConfig] = {}
        self._init_providers()
        self.fallback_chain = self.config.get(
            "fallback_chain", ["local_ollama", "openai", "anthropic", "mistral"]
        )

    def _init_providers(self) -> None:
        for name, data in self.config.get("providers", {}).items():
            self.providers[name] = ProviderConfig(
                name=data.get("name", name),
                model=data.get("model", "default"),
                base_url=data.get("base_url", ""),
                timeout=int(data.get("timeout", 60)),
                max_retries=int(data.get("max_retries", 3)),
                cost_per_token=float(data.get("cost_per_token", 0.0)),
                avg_latency=float(data.get("avg_latency", 1.0)),
                capabilities=list(data.get("capabilities", ["text_generation"])),
            )

    def _call_ollama(self, provider: ProviderConfig, prompt: str) -> str:
        base = (provider.base_url or "http://127.0.0.1:11434").rstrip("/")
        body = json.dumps(
            {
                "model": provider.model,
                "messages": [
                    {
                        "role": "system",
                        "content": (
                            "You are Acquit.ai legal information assistant. "
                            "Educational/procedural only. Not legal advice."
                        ),
                    },
                    {"role": "user", "content": prompt},
                ],
                "stream": False,
                "options": {"temperature": 0.3, "num_predict": 2048},
            }
        ).encode("utf-8")
        req = urllib.request.Request(
            f"{base}/api/chat",
            data=body,
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        with urllib.request.urlopen(req, timeout=provider.timeout) as resp:
            payload = json.loads(resp.read().decode("utf-8"))
        content = (payload.get("message") or {}).get("content")
        if not content:
            raise RuntimeError("Ollama returned empty content")
        return str(content).strip()

    def delegate(
        self,
        task: Dict[str, Any],
        preferred_provider: Optional[str] = None,
        sensitivity: SensitivityLevel = SensitivityLevel.INTERNAL,
        agent_id: str = "system",
    ) -> Dict[str, Any]:
        task_id = task.get("task_id", f"task_{int(time.time() * 1000)}")

        # Case data always prefers local Ollama
        if sensitivity.rank >= SensitivityLevel.CASE_DATA.rank and not preferred_provider:
            provider_name = "local_ollama"
        elif preferred_provider and preferred_provider in self.providers:
            provider_name = preferred_provider
        else:
            provider_name = self.fallback_chain[0]

        chain = [provider_name] + [p for p in self.fallback_chain if p != provider_name]
        prompt_str = task.get("prompt") or task.get("description") or str(task)
        last_error: Optional[str] = None

        for name in chain:
            provider = self.providers.get(name)
            if not provider:
                continue
            start = time.time()
            try:
                if name == "local_ollama":
                    content = self._call_ollama(provider, prompt_str)
                else:
                    # Cloud SDKs optional — explicit opt-in; do not call without keys
                    content = (
                        f"[{provider.name} not configured for live calls in this build] "
                        f"Task: {prompt_str[:200]}"
                    )
                    if name != "local_ollama" and not os.environ.get(
                        f"{name.upper()}_API_KEY"
                    ) and not os.environ.get("OPENAI_API_KEY" if name == "openai" else ""):
                        raise RuntimeError(f"No API key for {name}; skip to next")

                latency = time.time() - start
                tokens_used = max(50, len(content) // 4)
                cost = tokens_used * provider.cost_per_token
                self.audit_logger.record(
                    task_id=task_id,
                    agent_id=agent_id,
                    provider=provider.name,
                    sensitivity_level=sensitivity.value,
                    tokens_used=tokens_used,
                    cost=cost,
                    metadata={"model": provider.model, "latency": latency},
                )
                return {
                    "status": "success",
                    "provider": provider.name,
                    "model": provider.model,
                    "content": content,
                    "tokens_used": tokens_used,
                    "cost": cost,
                    "task_id": task_id,
                }
            except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, RuntimeError, OSError) as exc:
                last_error = str(exc)
                continue

        return {
            "status": "error",
            "error": last_error or "All providers failed",
            "task_id": task_id,
            "hint": "Is Ollama running? ollama serve && ollama pull llama3.2",
        }

    def broadcast(
        self,
        task: Dict[str, Any],
        sensitivity: SensitivityLevel = SensitivityLevel.PUBLIC,
        providers: Optional[List[str]] = None,
    ) -> Dict[str, Any]:
        self.permission_guard.validate_broadcast(sensitivity)
        # Prefer local for privacy; do not fan-out case data to cloud
        primary = "local_ollama"
        if providers:
            primary = providers[0]
        res = self.delegate(
            task,
            preferred_provider=primary,
            sensitivity=sensitivity,
            agent_id="broadcast_system",
        )
        return {
            "status": res.get("status", "error"),
            "first_provider": res.get("provider"),
            "result": res.get("content") or res.get("error"),
            "all_results": {res.get("provider", "unknown"): res},
        }
