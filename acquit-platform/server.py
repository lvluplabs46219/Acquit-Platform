"""
Acquit Platform - Agent Layer HTTP Server
FastAPI entrypoint the Express API calls (POST /run) to execute agents
through the permissioned, audited LLM router.

Run:  uvicorn server:app --host 0.0.0.0 --port 8000
"""

import os
import sys
from typing import Any, Dict, Optional

from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel

current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

from security.permissions import PermissionGuard, Permission, SensitivityLevel
from security.audit import AuditLogger
from core.llm_router import LLMRouter
from agents.research_agent import ResearchAgent
from agents.code_agent import CodeAgent

app = FastAPI(title="Acquit Agent Layer", version="2.0.0")

AGENT_LAYER_SECRET = os.environ.get("AGENT_LAYER_SECRET", "")

SENSITIVITY_MAP = {
    "public": SensitivityLevel.PUBLIC,
    "internal": SensitivityLevel.INTERNAL,
    "case_data": SensitivityLevel.CASE_DATA,
    "privileged": SensitivityLevel.PRIVILEGED,
}


class RunRequest(BaseModel):
    agent_id: str
    task: Dict[str, Any]
    context: Dict[str, Any] = {}
    sensitivity: str = "internal"
    task_id: Optional[str] = None


def build_system() -> Dict[str, Any]:
    permission_guard = PermissionGuard()
    permission_guard.register_agent(
        agent_id="research_agent",
        allowed_permissions={
            Permission.READ_DOCUMENTS,
            Permission.ACCESS_CASE_DATA,
            Permission.LEGAL_RESEARCH,
            Permission.DELEGATE_LLM,
        },
        max_sensitivity=SensitivityLevel.CASE_DATA,
    )
    permission_guard.register_agent(
        agent_id="code_agent",
        allowed_permissions={
            Permission.EXECUTE_CODE,
            Permission.READ_DOCUMENTS,
            Permission.DELEGATE_LLM,
        },
        max_sensitivity=SensitivityLevel.INTERNAL,
    )
    router = LLMRouter(permission_guard=permission_guard)
    agents = {
        "research_agent": ResearchAgent(
            llm_router=router,
            permission_guard=permission_guard,
        ),
        "code_agent": CodeAgent(
            llm_router=router,
            permission_guard=permission_guard,
        ),
    }
    return {"permission_guard": permission_guard, "router": router, "agents": agents}


SYSTEM = build_system()


@app.get("/health")
def health() -> Dict[str, Any]:
    return {"status": "ok", "agents": sorted(SYSTEM["agents"].keys())}


@app.post("/run")
def run_agent(
    body: RunRequest,
    x_agent_secret: Optional[str] = Header(default=None),
) -> Dict[str, Any]:
    if AGENT_LAYER_SECRET and x_agent_secret != AGENT_LAYER_SECRET:
        raise HTTPException(status_code=401, detail="Invalid agent layer secret")

    agent = SYSTEM["agents"].get(body.agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Unknown agent: " + body.agent_id)

    sensitivity = SENSITIVITY_MAP.get(body.sensitivity.lower(), SensitivityLevel.INTERNAL)
    task = dict(body.task)
    if body.task_id:
        task["task_id"] = body.task_id

    return agent.execute(task=task, context=body.context, sensitivity=sensitivity)
