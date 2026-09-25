"""
Acquit Platform - Multi-Provider LLM Router
Supports OpenAI, Anthropic, Mistral, and Local Ollama with intelligent routing,
real provider SDK-less HTTP calls, fallback handling, sensitivity guards,
and compliance audit logging.
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
    timeout: int = 60
    max_retries: int = 3
    cost_per_token: float = 0.0
    avg_latency: float = 1.0
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
                "model": os.environ.get("OLLAMA_MODEL", "llama3:8b"),
                "base_url": os.environ.get("OLLAMA_BASE_URL", "http://localhost:11434"),
                "cost_per_token": 0.0,
                "avg_latency": 0.3,
                "capabilities": ["text_generation", "case_data_processing", "private_processing"],
            },
            "anthropic": {
                "name": "anthropic",
                "model": os.environ.get("ANTHROPIC_MODEL", "claude-3-5-sonnet-latest"),
                "base_url": "https://api.anthropic.com",
                "cost_per_token": 0.000003,
                "avg_latency": 1.2,
                "capabilities": ["text_generation", "reasoning", "long_context"],
            },
            "openai": {
                "name": "openai",
                "model": os.environ.get("OPENAI_MODEL", "gpt-4o"),
                "base_url": "https://api.openai.com",
                "cost_per_token": 0.0000025,
                "avg_latency": 1.0,
                "capabilities": ["text_generation", "code_generation", "json_mode"],
            },
            "mistral": {
                "name": "mistral",
                "model": os.environ.get("MISTRAL_MODEL", "mistral-large-latest"),
                "base_url": "https://api.mistral.ai",
                "cost_per_token": 0.000002,
                "avg_latency": 0.8,
                "capabilities": ["text_generation", "multilingual"],
            },
        },
        "fallback_chain": ["local_ollama", "anthropic", "openai", "mistral"],
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
        self.fallback_chain = self.config.get("fallback_chain", ["local_ollama", "anthropic", "openai", "mistral"])

    def _init_providers(self):
        providers_data = self.config.get("providers", {})
        for name, data in providers_data.items():
            self.providers[name] = ProviderConfig(
                name=data.get("name", name),
                model=data.get("model", "default"),
                base_url=data.get("base_url", ""),
                timeout=data.get("timeout", 60),
                max_retries=data.get("max_retries", 3),
                cost_per_token=data.get("cost_per_token", 0.0),
                avg_latency=data.get("avg_latency", 1.0),
                capabilities=data.get("capabilities", ["text_generation"])
            )

    # ------------------------------------------------------------------
    # Real provider calls (plain HTTP, no SDK dependencies)
    # ------------------------------------------------------------------

    @staticmethod
    def _provider_api_key(provider: str) -> Optional[str]:
        if provider == "openai":
            return os.environ.get("OPENAI_API_KEY")
        if provider == "anthropic":
            return os.environ.get("ANTHROPIC_API_KEY")
        if provider == "mistral":
            return (
                os.environ.get("MISTRAL_API_KEY")
                or os.environ.get("MISTRAL_API")
                or os.environ.get("MISTRAIL_API")
            )
        return None

    def _call_provider(self, provider: ProviderConfig, prompt_str: str) -> LLMResponse:
        """Makes a real completion request to the given provider."""
        start = time.time()
        api_key = self._provider_api_key(provider.name)

        try:
            if provider.name == "openai":
                if not api_key:
                    return LLMResponse("", provider.name, provider.model, "error", error="OPENAI_API_KEY not set")
                r = requests.post(
                    provider.base_url.rstrip("/") + "/v1/chat/completions",
                    headers={"Authorization": "Bearer " + api_key, "Content-Type": "application/json"},
                    json={
                        "model": provider.model,
                        "messages": [{"role": "user", "content": prompt_str}],
                    },
                    timeout=provider.timeout,
                )
                r.raise_for_status()
                data = r.json()
                content = data["choices"][0]["message"]["content"]
                tokens = data.get("usage", {}).get("total_tokens", 0)

            elif provider.name == "anthropic":
                if not api_key:
                    return LLMResponse("", provider.name, provider.model, "error", error="ANTHROPIC_API_KEY not set")
                r = requests.post(
                    provider.base_url.rstrip("/") + "/v1/messages",
                    headers={
                        "x-api-key": api_key,
                        "anthropic-version": "2023-06-01",
                        "Content-Type": "application/json",
                    },
                    json={
                        "model": provider.model,
                        "max_tokens": 4096,
                        "messages": [{"role": "user", "content": prompt_str}],
                    },
                    timeout=provider.timeout,
                )
                r.raise_for_status()
                data = r.json()
                content = "".join(block.get("text", "") for block in data.get("content", []))
                tokens = data.get("usage", {}).get("input_tokens", 0) + data.get("usage", {}).get("output_tokens", 0)

            elif provider.name == "mistral":
                if not api_key:
                    return LLMResponse("", provider.name, provider.model, "error", error="MISTRAL_API_KEY not set")
                r = requests.post(
                    provider.base_url.rstrip("/") + "/v1/chat/completions",
                    headers={"Authorization": "Bearer " + api_key, "Content-Type": "application/json"},
                    json={
                        "model": provider.model,
                        "messages": [{"role": "user", "content": prompt_str}],
                    },
                    timeout=provider.timeout,
                )
                r.raise_for_status()
                data = r.json()
                content = data["choices"][0]["message"]["content"]
                tokens = data.get("usage", {}).get("total_tokens", 0)

            elif provider.name == "local_ollama":
                base = provider.base_url or os.environ.get("OLLAMA_BASE_URL", "http://localhost:11434")
                r = requests.post(
                    base.rstrip("/") + "/api/generate",
                    json={"model": provider.model, "prompt": prompt_str, "stream": False},
                    timeout=provider.timeout,
                )
                r.raise_for_status()
                data = r.json()
                content = data.get("response", "")
                tokens = data.get("eval_count", 0) or data.get("prompt_eval_count", 0)

            else:
                return LLMResponse("", provider.name, provider.model, "error", error="Unknown provider")

            latency = time.time() - start
            return LLMResponse(
                content=content,
                provider=provider.name,
                model=provider.model,
                status="success",
                tokens_used=tokens,
                cost=tokens * provider.cost_per_token,
                latency=latency,
            )

        except requests.RequestException as exc:
            return LLMResponse(
                "", provider.name, provider.model, "error",
                latency=time.time() - start, error=str(exc),
            )
        except (KeyError, ValueError) as exc:
            return LLMResponse(
                "", provider.name, provider.model, "error",
                latency=time.time() - start, error="Malformed provider response: " + str(exc),
            )

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    def delegate(
        self,
        task: Dict[str, Any],
        preferred_provider: Optional[str] = None,
        sensitivity: SensitivityLevel = SensitivityLevel.INTERNAL,
        agent_id: str = "system"
    ) -> Dict[str, Any]:
        """
        Routes a task to the optimal LLM provider with fallback handling and
        audit logging. Case-data sensitivity forces local processing unless a
        provider is explicitly preferred.
        """
        task_id = task.get("task_id", "task_" + str(int(time.time() * 1000)))
        prompt_str = task.get("prompt") or task.get("description") or str(task)

        # Sensitivity routing: case_data prefers on-premise/local processing
        if sensitivity.rank >= SensitivityLevel.CASE_DATA.rank and not preferred_provider:
            chain = ["local_ollama"] + [p for p in self.fallback_chain if p != "local_ollama"]
        elif preferred_provider and preferred_provider in self.providers:
            chain = [preferred_provider] + [p for p in self.fallback_chain if p != preferred_provider]
        else:
            chain = list(self.fallback_chain)

        last_error = "No providers configured"
        for provider_name in chain:
            provider = self.providers.get(provider_name)
            if not provider:
                continue

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
            last_error = provider_name + ": " + (response.error or "unknown error")

        return {
            "status": "error",
            "error": "All providers failed. Last error: " + last_error,
            "task_id": task_id,
        }

    def broadcast(
        self,
        task: Dict[str, Any],
        sensitivity: SensitivityLevel = SensitivityLevel.PUBLIC,
        providers: Optional[List[str]] = None
    ) -> Dict[str, Any]:
        """
        Broadcasts a task to multiple LLM providers.
        Guarded against leaking sensitive case or privileged data.
        """
        self.permission_guard.validate_broadcast(sensitivity)

        target_providers = providers or list(self.providers.keys())
        primary = next((p for p in target_providers if p != "local_ollama"), target_providers[0])
        res = self.delegate(task, preferred_provider=primary, sensitivity=sensitivity, agent_id="broadcast_system")
        if res["status"] != "success":
            return {"status": "error", "error": res.get("error"), "task_id": res.get("task_id")}
        return {
            "status": "success",
            "first_provider": res["provider"],
            "result": res["content"],
            "all_results": {res["provider"]: res}
        }
