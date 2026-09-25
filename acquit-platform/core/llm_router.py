"""
Acquit Platform - Ollama-Only LLM Router

Routes all LLM tasks exclusively to local Ollama.
"""

import os
import time
from typing import Dict, List, Optional, Any
from dataclasses import dataclass, field

import requests

from security.permissions import SensitivityLevel, PermissionGuard
from security.audit import AuditLogger


@dataclass
class ProviderConfig:
    name: str
    model: str
    base_url: str = ""
    timeout: int = 120
    max_retries: int = 3
    cost_per_token: float = 0.0
    avg_latency: float = 0.3
    capabilities: List[str] = field(default_factory=list)


@dataclass
class LLMResponse:
    content: str
    provider: str
    model: str
    status: str = "success"
    tokens_used: int = 0
    cost: float = 0.0
    latency: float = 0.0
    error: Optional[str] = None


class LLMRouter:
    DEFAULT_CONFIG = {
        "providers": {
            "local_ollama": {
                "name": "local_ollama",
                "model": os.environ.get("OLLAMA_MODEL", "llama3.2"),
                "base_url": os.environ.get("OLLAMA_BASE_URL", "http://127.0.0.1:11434"),
                "cost_per_token": 0.0,
                "avg_latency": 0.3,
                "capabilities": ["text_generation", "case_data_processing", "private_processing"],
            }
        },
        "fallback_chain": ["local_ollama"],
    }

    def __init__(
        self,
        config: Optional[Dict[str, Any]] = None,
        audit_logger: Optional[AuditLogger] = None,
        permission_guard: Optional[PermissionGuard] = None
    ):
        self.config = config or self.DEFAULT_CONFIG
        self.audit_logger = audit_logger or AuditLogger()
        self.permission_guard = permission_guard or PermissionGuard()
        self.providers: Dict[str, ProviderConfig] = {}
        self._init_providers()
        self.fallback_chain = ["local_ollama"]

    def _init_providers(self):
        providers_data = self.config.get("providers", {})
        for name, data in providers_data.items():
            if name == "local_ollama":
                self.providers[name] = ProviderConfig(
                    name=data.get("name", name),
                    model=data.get("model", "llama3.2"),
                    base_url=data.get("base_url", "http://127.0.0.1:11434"),
                    timeout=data.get("timeout", 120),
                    max_retries=data.get("max_retries", 3),
                    cost_per_token=0.0,
                    avg_latency=data.get("avg_latency", 0.3),
                    capabilities=data.get("capabilities", ["text_generation"])
                )

    def _call_provider(self, provider: ProviderConfig, prompt_str: str) -> LLMResponse:
        start = time.time()
        try:
            base = provider.base_url or os.environ.get("OLLAMA_BASE_URL", "http://127.0.0.1:11434")
            headers = {"Content-Type": "application/json"}

            r = requests.post(
                base.rstrip("/") + "/api/generate",
                headers=headers,
                json={"model": provider.model, "prompt": prompt_str, "stream": False},
                timeout=provider.timeout,
            )
            r.raise_for_status()
            data = r.json()
            content = data.get("response", "")
            tokens = data.get("eval_count", 0) or data.get("prompt_eval_count", 0)

            latency = time.time() - start
            return LLMResponse(
                content=content,
                provider=provider.name,
                model=provider.model,
                status="success",
                tokens_used=tokens,
                cost=0.0,
                latency=latency,
            )

        except requests.RequestException as exc:
            err_msg = str(exc)
            if hasattr(exc, "response") and exc.response is not None:
                try:
                    err_msg = f"HTTP {exc.response.status_code}: {exc.response.text}"
                except Exception:
                    pass
            return LLMResponse(
                "", provider.name, provider.model, "error",
                latency=time.time() - start, error=err_msg,
            )
        except (KeyError, ValueError) as exc:
            return LLMResponse(
                "", provider.name, provider.model, "error",
                latency=time.time() - start, error="Malformed response: " + str(exc),
            )

    @staticmethod
    def _extract_prompt(task: Dict[str, Any]) -> str:
        if isinstance(task, dict):
            if "prompt" in task and task["prompt"]:
                return str(task["prompt"])
            if "description" in task and task["description"]:
                return str(task["description"])
            if "parameters" in task and isinstance(task["parameters"], dict):
                params = task["parameters"]
                if "query" in params and params["query"]:
                    return str(params["query"])
                if "prompt" in params and params["prompt"]:
                    return str(params["prompt"])
            return str(task)
        return str(task)

    def delegate(
        self,
        task: Dict[str, Any],
        preferred_provider: Optional[str] = None,
        sensitivity: SensitivityLevel = SensitivityLevel.INTERNAL,
        agent_id: str = "system"
    ) -> Dict[str, Any]:
        task_id = task.get("task_id", "task_" + str(int(time.time() * 1000))) if isinstance(task, dict) else "task_" + str(int(time.time() * 1000))
        prompt_str = self._extract_prompt(task)

        provider = self.providers.get("local_ollama")
        if not provider:
            return {
                "status": "error",
                "error": "Local Ollama provider configuration not found.",
                "task_id": task_id,
            }

        response = self._call_provider(provider, prompt_str)
        if response.status == "success":
            self.audit_logger.record(
                task_id=task_id,
                agent_id=agent_id,
                provider=provider.name,
                sensitivity_level=sensitivity.value,
                tokens_used=response.tokens_used,
                cost=response.cost,
                metadata={"model": provider.model, "latency": response.latency}
            )
            return {
                "status": "success",
                "provider": provider.name,
                "model": provider.model,
                "content": response.content,
                "tokens_used": response.tokens_used,
                "cost": response.cost,
                "latency": response.latency,
                "task_id": task_id,
            }

        return {
            "status": "error",
            "error": "Ollama provider failed: " + (response.error or "unknown error"),
            "task_id": task_id,
        }

    def broadcast(
        self,
        task: Dict[str, Any],
        sensitivity: SensitivityLevel = SensitivityLevel.PUBLIC,
        providers: Optional[List[str]] = None
    ) -> Dict[str, Any]:
        return self.delegate(task, sensitivity=sensitivity, agent_id="broadcast_system")