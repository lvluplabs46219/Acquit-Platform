// AUTO-GENERATED from ai_engine_models_agent_personas_playground_studio/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./ai_engine_models_agent_personas_playground_studio.css";

export default function AiEngineModelsAgentPersonasPlaygroundStudio() {
  return (
    <AppShell pageName="ai_engine_models_agent_personas_playground_studio">
      <div className="stitch-page">


  
  <header className="h-14 bg-[#141313] border-b border-[#262525] flex items-center justify-between px-5 shrink-0 z-30">
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2.5">
        <span className="material-symbols-outlined text-[#c8a97e] text-2xl">balance</span>
        <span className="font-domine font-black text-base tracking-wider text-white uppercase">ACQUIT.AI</span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1b1b] border border-[#333] text-[#c8a97e]">AI OS CORE</span>
      </div>
      <div className="h-4 w-px bg-[#262525]"></div>
      
      <div className="flex items-center gap-2 text-xs font-mono text-[#888]">
        <span className="hover:text-white cursor-pointer">AI ENGINE & LABS</span>
        <span>/</span>
        <span className="text-[#c8a97e] font-semibold">MODEL INVENTORY & AGENT FORGE</span>
      </div>
    </div>

    
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 px-3 py-1 bg-[#1a1919] rounded border border-[#2a2929] text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-[#999]">Inference Cluster:</span>
        <span className="text-white font-semibold">4 Active Nodes (GPU-H100)</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1 bg-[#1a1919] rounded border border-[#2a2929] text-xs font-mono">
        <span className="text-[#999]">Context Limit:</span>
        <span className="text-[#c8a97e] font-semibold">200k Legal Tokens</span>
      </div>
      <button className="flex items-center gap-2 px-3.5 py-1.5 bg-[#c8a97e] hover:bg-[#d6ba92] text-black font-semibold text-xs font-mono uppercase tracking-wider rounded transition-all">
        <span className="material-symbols-outlined text-sm font-bold">add</span>
        <span>Deploy New Model / Agent</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-xs font-mono text-[#c8a97e]">
        SC
      </div>
    </div>
  </header>

  
  <div className="flex-1 flex overflow-hidden">

    
    <aside className="w-64 bg-[#121111] border-r border-[#222] flex flex-col justify-between shrink-0">
      <div>
        <div className="p-3.5 border-b border-[#222]">
          <div className="text-[11px] font-mono text-[#777] uppercase tracking-wider mb-2">AI Studio Navigation</div>
          <div className="space-y-1">
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#1c1b1b] border-l-4 border-[#c8a97e] text-white text-xs font-medium">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#c8a97e] text-base">psychology</span>
                <span>LLM Models & Weights</span>
              </div>
              <span className="text-[10px] font-mono bg-[#282727] text-[#c8a97e] px-1.5 py-0.5 rounded">6 Active</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#181818] text-[#999] hover:text-white text-xs font-medium transition-all">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base">tune</span>
                <span>Personality & Prompt Tuning</span>
              </div>
              <span className="text-[10px] font-mono bg-[#1f1e1e] text-[#777] px-1.5 py-0.5 rounded">8 Roster</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#181818] text-[#999] hover:text-white text-xs font-medium transition-all">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base">model_training</span>
                <span>Fine-Tuning & LoRA Weights</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-800/40">1 Training</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#181818] text-[#999] hover:text-white text-xs font-medium transition-all">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base">sports_esports</span>
                <span>Agent Playground</span>
              </div>
              <span className="text-[10px] font-mono text-[#c8a97e]">Live Arena</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#181818] text-[#999] hover:text-white text-xs font-medium transition-all">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base">verified_user</span>
                <span>Guardrails & UPL Rules</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Enforced</span>
            </a>
          </div>
        </div>

        
        <div className="p-3.5">
          <div className="text-[11px] font-mono text-[#777] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Specialized Agents</span>
            <span className="material-symbols-outlined text-xs text-[#777] cursor-pointer hover:text-white">refresh</span>
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            <div className="p-2 rounded bg-[#181717] border border-[#262525] flex items-center justify-between hover:border-[#c8a97e]/60 cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#252424] border border-[#3a3939] flex items-center justify-center text-[11px] text-[#c8a97e]">HL</div>
                <div>
                  <div className="text-white text-[11px] font-semibold">Head Legal AI</div>
                  <div className="text-[10px] text-[#777]">Claude-3.5-Sonnet</div>
                </div>
              </div>
              <span className="text-[9px] text-emerald-400 bg-emerald-950/70 border border-emerald-800/40 px-1 py-0.5 rounded">Roster 1</span>
            </div>
            <div className="p-2 rounded bg-[#181717] border border-[#262525] flex items-center justify-between hover:border-[#c8a97e]/60 cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#252424] border border-[#3a3939] flex items-center justify-center text-[11px] text-[#c8a97e]">RC</div>
                <div>
                  <div className="text-white text-[11px] font-semibold">Precedent Researcher</div>
                  <div className="text-[10px] text-[#777]">Lex-Jurist-v4 (LoRA)</div>
                </div>
              </div>
              <span className="text-[9px] text-[#c8a97e] bg-[#2a241b] border border-[#483c2a] px-1 py-0.5 rounded">Custom</span>
            </div>
            <div className="p-2 rounded bg-[#181717] border border-[#262525] flex items-center justify-between hover:border-[#c8a97e]/60 cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#252424] border border-[#3a3939] flex items-center justify-center text-[11px] text-[#c8a97e]">IS</div>
                <div>
                  <div className="text-white text-[11px] font-semibold">Issue Spotter & Impeacher</div>
                  <div className="text-[10px] text-[#777]">GPT-4o + RAG</div>
                </div>
              </div>
              <span className="text-[9px] text-blue-400 bg-blue-950/60 border border-blue-800/40 px-1 py-0.5 rounded">Adversarial</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="p-3 border-t border-[#222] bg-[#0c0c0c] text-[10px] font-mono text-[#666] space-y-1">
        <div className="flex justify-between">
          <span>Embeddings DB:</span>
          <span className="text-white font-medium">pgvector (1.2M vectors)</span>
        </div>
        <div className="flex justify-between">
          <span>Local Model Host:</span>
          <span className="text-emerald-400 font-medium">vLLM 0.5.4 Active</span>
        </div>
        <div className="flex justify-between">
          <span>Quantization:</span>
          <span className="text-[#c8a97e]">AWQ 4-bit / BF16</span>
        </div>
      </div>
    </aside>

    
    <main className="flex-1 flex flex-col overflow-y-auto custom-scroll bg-[#111010]">

      
      <div className="p-6 pb-4 border-b border-[#222] flex items-center justify-between bg-[#141313]/50">
        <div>
          <h1 className="font-domine text-2xl font-black text-white tracking-tight">AI Models & Agent Studio</h1>
          <p className="text-xs text-[#999] mt-1 font-mono">
            Manage underlying foundation LLMs, configure bespoke legal agent personas, inspect behavioral parameters, and train weights on jurisdiction precedent.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded bg-[#1f1e1e] hover:bg-[#2a2929] border border-[#333] text-xs font-mono text-white flex items-center gap-1.5 transition-all">
            <span className="material-symbols-outlined text-sm">tune</span>
            <span>Global Inference Config</span>
          </button>
          <button className="px-3.5 py-1.5 rounded bg-[#c8a97e] hover:bg-[#d6ba92] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 shadow transition-all">
            <span className="material-symbols-outlined text-sm">rocket_launch</span>
            <span>Launch Agent Playground</span>
          </button>
        </div>
      </div>

      
      <div className="px-6 pt-3 border-b border-[#222] flex items-center gap-6 text-xs font-mono">
        <button className="pb-3 text-[#c8a97e] border-b-2 border-[#c8a97e] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">hub</span>
          <span>1. Model Registry & Weights</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#2a241b] text-[#c8a97e]">6</span>
        </button>
        <button className="pb-3 text-[#888] hover:text-white border-b-2 border-transparent font-medium flex items-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-sm">psychology_alt</span>
          <span>2. Agent Personas & Behavioral Tuning</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#1c1b1b] text-[#777]">8</span>
        </button>
        <button className="pb-3 text-[#888] hover:text-white border-b-2 border-transparent font-medium flex items-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-sm">history_edu</span>
          <span>3. Training Datasets & LoRA Fine-Tuning</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#1c1b1b] text-[#777]">3 Active</span>
        </button>
        <button className="pb-3 text-[#888] hover:text-white border-b-2 border-transparent font-medium flex items-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-sm">sports_kabaddi</span>
          <span>4. Multi-Agent Mock Trial Arena</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400">Live</span>
        </button>
      </div>

      
      <div className="p-6 space-y-6">

        
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#171616] border border-[#292828]">
            <div className="flex items-center justify-between text-[#888] text-xs font-mono mb-1">
              <span>Connected LLM Providers</span>
              <span className="material-symbols-outlined text-sm text-[#c8a97e]">cloud</span>
            </div>
            <div className="text-xl font-bold font-domine text-white">4 Engines</div>
            <div className="text-[11px] font-mono text-[#666] mt-1">Anthropic, OpenAI, Local vLLM, DeepSeek-R1</div>
          </div>

          <div className="p-4 rounded-xl bg-[#171616] border border-[#292828]">
            <div className="flex items-center justify-between text-[#888] text-xs font-mono mb-1">
              <span>Fine-Tuned Legal Adapters</span>
              <span className="material-symbols-outlined text-sm text-emerald-400">precision_manufacturing</span>
            </div>
            <div className="text-xl font-bold font-domine text-white">3 LoRA Weights</div>
            <div className="text-[11px] font-mono text-emerald-400 mt-1">9th Circuit, Fed Crim, SDNY Local</div>
          </div>

          <div className="p-4 rounded-xl bg-[#171616] border border-[#292828]">
            <div className="flex items-center justify-between text-[#888] text-xs font-mono mb-1">
              <span>Average Hallucination Rate</span>
              <span className="material-symbols-outlined text-sm text-blue-400">verified</span>
            </div>
            <div className="text-xl font-bold font-domine text-emerald-400">&lt; 0.12%</div>
            <div className="text-[11px] font-mono text-[#666] mt-1">Grounded via Shepards & Fastcase</div>
          </div>

          <div className="p-4 rounded-xl bg-[#171616] border border-[#292828]">
            <div className="flex items-center justify-between text-[#888] text-xs font-mono mb-1">
              <span>Active Agent Personas</span>
              <span className="material-symbols-outlined text-sm text-[#c8a97e]">group_work</span>
            </div>
            <div className="text-xl font-bold font-domine text-white">8 Roster Agents</div>
            <div className="text-[11px] font-mono text-[#666] mt-1">Assigned across 45 Active Dockets</div>
          </div>
        </div>

        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-domine text-base font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#c8a97e] text-lg">memory</span>
              <span>Available Foundation LLMs & Inference Endpoints</span>
            </h2>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#777]">Filter:</span>
              <button className="px-2 py-0.5 rounded bg-[#222] text-[#c8a97e] border border-[#333]">All (6)</button>
              <button className="px-2 py-0.5 rounded text-[#888] hover:text-white">Cloud API</button>
              <button className="px-2 py-0.5 rounded text-[#888] hover:text-white">Air-Gapped / On-Premise</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">

            
            <div className="p-4 rounded-xl bg-[#161515] border border-[#2d2c2c] hover:border-[#c8a97e] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#241f17] border border-[#483925] flex items-center justify-center font-mono text-xs text-[#c8a97e] font-bold">
                      A
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-domine">Claude 3.5 Sonnet</div>
                      <div className="text-[10px] font-mono text-[#888]">Anthropic • Bedrock / Direct API</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/50 text-emerald-300">DEFAULT REASONER</span>
                </div>

                <p className="text-xs text-[#aaa] mt-3 leading-relaxed">
                  Primary model for complex statutory analysis, multi-count indictment dissection, and drafting high-stakes motions to dismiss.
                </p>

                <div className="mt-4 pt-3 border-t border-[#242323] grid grid-cols-2 gap-2 text-[11px] font-mono text-[#888]">
                  <div>Context: <span className="text-white">200,000 tokens</span></div>
                  <div>Latency: <span className="text-white">~340ms TTFT</span></div>
                  <div>Cost / 1k: <span className="text-white">$0.003 / $0.015</span></div>
                  <div>Legal Accuracy: <span className="text-emerald-400 font-bold">96.8%</span></div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#242323] flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online & Verified
                </span>
                <button className="px-2.5 py-1 rounded bg-[#222] hover:bg-[#2d2d2d] text-white text-[11px] font-mono flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">settings</span> Configure
                </button>
              </div>
            </div>

            
            <div className="p-4 rounded-xl bg-[#161515] border border-[#2d2c2c] hover:border-[#c8a97e] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#142329] border border-[#1b3f4d] flex items-center justify-center font-mono text-xs text-blue-400 font-bold">
                      R1
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-domine">DeepSeek-R1 (Full 671B)</div>
                      <div className="text-[10px] font-mono text-[#888]">Self-Hosted vLLM / Dedicated H100</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 border border-blue-700/50 text-blue-300">DEEP THINKING</span>
                </div>

                <p className="text-xs text-[#aaa] mt-3 leading-relaxed">
                  Used for intricate chain-of-thought adversarial logic, spotting obscure statute conflicts, and calculating precise timeline inconsistencies.
                </p>

                <div className="mt-4 pt-3 border-t border-[#242323] grid grid-cols-2 gap-2 text-[11px] font-mono text-[#888]">
                  <div>Context: <span className="text-white">128,000 tokens</span></div>
                  <div>Latency: <span className="text-white">~680ms (Extended CoT)</span></div>
                  <div>Air-Gapped: <span className="text-emerald-400 font-bold">Yes (No External Logs)</span></div>
                  <div>Reasoning Benchmark: <span className="text-blue-400 font-bold">94.2%</span></div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#242323] flex items-center justify-between">
                <span className="text-[10px] font-mono text-blue-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Local Enclave Active
                </span>
                <button className="px-2.5 py-1 rounded bg-[#222] hover:bg-[#2d2d2d] text-white text-[11px] font-mono flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">code</span> CoT Inspector
                </button>
              </div>
            </div>

            
            <div className="p-4 rounded-xl bg-[#1a1714] border border-[#443828] hover:border-[#c8a97e] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#2a2216] border border-[#614e2f] flex items-center justify-center font-mono text-xs text-[#c8a97e] font-bold">
                      LJ
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-domine">Lex-Jurist-v4 (Fine-Tuned)</div>
                      <div className="text-[10px] font-mono text-[#c8a97e]">Proprietary Legal Weights (LoRA)</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2b2216] border border-[#c8a97e]/60 text-[#c8a97e]">ACQUIT TRAINED</span>
                </div>

                <p className="text-xs text-[#aaa] mt-3 leading-relaxed">
                  Trained on 450,000 pages of federal criminal appeals, Fourth Amendment suppression briefs, and verified SDNY jury instructions.
                </p>

                <div className="mt-4 pt-3 border-t border-[#2e261e] grid grid-cols-2 gap-2 text-[11px] font-mono text-[#888]">
                  <div>Base: <span className="text-white">Llama-3.3-70B-Instruct</span></div>
                  <div>Quant: <span className="text-white">AWQ 4-bit (24GB VRAM)</span></div>
                  <div>Bluebook Strictness: <span className="text-emerald-400 font-bold">99.4%</span></div>
                  <div>UPL Guardrail: <span className="text-white">Enforced Native</span></div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2e261e] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#c8a97e] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]"></span> Adapter Mounted
                </span>
                <button className="px-2.5 py-1 rounded bg-[#c8a97e] hover:bg-[#d6ba92] text-black text-[11px] font-mono font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">tune</span> Train Weights
                </button>
              </div>
            </div>

          </div>
        </div>

        
        <div className="p-6 rounded-2xl bg-[#141313] border border-[#2a2929] space-y-6">
          <div className="flex items-center justify-between border-b border-[#242323] pb-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#c8a97e]">Agent Personality & System Prompt Studio</div>
              <h3 className="font-domine text-lg font-bold text-white mt-0.5">Configure Persona: Lead Litigation Counsel AI (ID: #AGT-001)</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#888]">Select Agent:</span>
              <select className="bg-[#1c1b1b] border border-[#333] rounded px-3 py-1 text-xs font-mono text-white focus:outline-none focus:border-[#c8a97e]">
                <option selected>Lead Litigation Counsel AI</option>
                <option>Precedent Miner & Researcher</option>
                <option>Forensic Issue Spotter</option>
                <option>Deposition Cross-Examiner</option>
                <option>Plea Bargain Strategist</option>
                <option>The Clerk (Court Filing Monitor)</option>
              </select>
              <button className="px-3 py-1 bg-[#c8a97e] hover:bg-[#d6ba92] text-black font-semibold text-xs font-mono rounded">
                Save & Hot-Reload
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-12 gap-6">

            
            <div className="col-span-7 space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#aaa] uppercase tracking-wider mb-1.5">
                  Core Persona Directive & Tone (System Prompt)
                </label>
                <textarea rows="7" className="w-full bg-[#181717] border border-[#333] rounded-lg p-3 text-xs font-mono text-[#eee] leading-relaxed focus:outline-none focus:border-[#c8a97e]" placeholder="Define the agent's internal persona, cognitive boundaries, and tone...">You are the Lead Litigation Counsel for Acquit.ai. Your posture is authoritative, precise, skeptical of unverified state claims, and uncompromising on procedural defense rights.

OPERATIONAL PRINCIPLES:
1. Never fabricate or extrapolate case citations. Every proposition must cite directly to an indexed binding authority or flag [NEEDS RESEARCH].
2. Identify latent Fourth, Fifth, and Sixth Amendment issues in all incoming discovery.
3. Address the Senior Partner directly with strategic risk assessments rather than purely abstract legal definitions.</textarea>
              </div>

              
              <div>
                <label className="block text-xs font-mono text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">gpp_bad</span>
                  <span>Negative Constraints (Strictly Forbidden Behaviors)</span>
                </label>
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-[#1c1515] border border-rose-950 text-[#ccc]">
                    <span>1. PROHIBIT_DIRECT_CLIENT_ADVICE: Never provide conclusive legal counsel to non-attorneys without human partner signoff.</span>
                    <span className="text-rose-400 text-[10px] font-bold">LOCKED</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#1c1515] border border-rose-950 text-[#ccc]">
                    <span>2. STRICT_BLUEBOOK_VALIDATION: Reject any non-standard citation format or overruled Shepardized opinions.</span>
                    <span className="text-rose-400 text-[10px] font-bold">ENFORCED</span>
                  </div>
                </div>
              </div>

              
              <div>
                <label className="block text-xs font-mono text-[#aaa] uppercase tracking-wider mb-1.5">
                  Assigned Knowledge Corpus & RAG Vectors
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <label className="flex items-center gap-2 p-2 rounded bg-[#1c1b1b] border border-[#2a2929] cursor-pointer hover:border-[#444]">
                    <input type="checkbox" checked className="rounded bg-[#141313] border-[#444] text-[#c8a97e] focus:ring-0" />
                    <span className="text-white text-[11px]">Federal Rules Crim. Pro.</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded bg-[#1c1b1b] border border-[#2a2929] cursor-pointer hover:border-[#444]">
                    <input type="checkbox" checked className="rounded bg-[#141313] border-[#444] text-[#c8a97e] focus:ring-0" />
                    <span className="text-white text-[11px]">Active Matter Discovery</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded bg-[#1c1b1b] border border-[#2a2929] cursor-pointer hover:border-[#444]">
                    <input type="checkbox" checked className="rounded bg-[#141313] border-[#444] text-[#c8a97e] focus:ring-0" />
                    <span className="text-white text-[11px]">9th Circuit Precedent</span>
                  </label>
                </div>
              </div>
            </div>

            
            <div className="col-span-5 space-y-5 bg-[#171616] p-4 rounded-xl border border-[#262525]">
              <div className="text-xs font-mono text-[#c8a97e] uppercase tracking-wider font-semibold border-b border-[#242323] pb-2">
                Inference Sliders & Risk Hyperparameters
              </div>

              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white">Temperature (Creativity vs Determinism)</span>
                  <span className="text-[#c8a97e] font-bold">0.15</span>
                </div>
                <input type="range" min="0" max="1" step="0.05" value="0.15" className="w-full accent-[#c8a97e] bg-[#222] h-1.5 rounded cursor-pointer" />
                <div className="flex justify-between text-[10px] font-mono text-[#666]">
                  <span>0.0 (Strict Fact)</span>
                  <span>0.5 (Balanced)</span>
                  <span>1.0 (Novel Arguments)</span>
                </div>
              </div>

              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white">Adversarial Posture (Cross-Exam Aggression)</span>
                  <span className="text-emerald-400 font-bold">0.85</span>
                </div>
                <input type="range" min="0" max="1" step="0.05" value="0.85" className="w-full accent-emerald-500 bg-[#222] h-1.5 rounded cursor-pointer" />
                <div className="flex justify-between text-[10px] font-mono text-[#666]">
                  <span>Diplomatic</span>
                  <span>Assertive</span>
                  <span>Relentless Impeachment</span>
                </div>
              </div>

              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white">Citation Verification Threshold</span>
                  <span className="text-blue-400 font-bold">99.8% Grounded</span>
                </div>
                <input type="range" min="90" max="100" step="0.1" value="99.8" className="w-full accent-blue-500 bg-[#222] h-1.5 rounded cursor-pointer" />
                <div className="flex justify-between text-[10px] font-mono text-[#666]">
                  <span>Lenient (Drafting)</span>
                  <span>Standard</span>
                  <span>Court-Filing Grade (100%)</span>
                </div>
              </div>

              
              <div className="pt-3 border-t border-[#242323] space-y-2">
                <label className="block text-xs font-mono text-[#888] uppercase">Backing Inference Engine</label>
                <select className="w-full bg-[#1c1b1b] border border-[#333] rounded px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-[#c8a97e]">
                  <option selected>Claude 3.5 Sonnet (Default Legal Reasoner)</option>
                  <option>DeepSeek-R1 (Air-Gapped CoT 671B)</option>
                  <option>Lex-Jurist-v4 (Fine-Tuned Llama-3 70B)</option>
                  <option>GPT-4o (High Concurrency Fast Parser)</option>
                </select>
              </div>

              
              <div className="p-2.5 rounded bg-[#121111] border border-[#222] text-[11px] font-mono space-y-1 text-[#888]">
                <div className="flex justify-between">
                  <span>Est. Context Consumption:</span>
                  <span className="text-white">18,400 tokens / prompt</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Generated Tokens:</span>
                  <span className="text-white">4,096 tokens</span>
                </div>
                <div className="flex justify-between">
                  <span>Inference Latency:</span>
                  <span className="text-emerald-400">~420ms</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        
        <div className="p-6 rounded-2xl bg-[#141313] border border-[#2a2929] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl text-[#c8a97e]">sports_esports</span>
              <div>
                <h3 className="font-domine text-lg font-bold text-white">Interactive Agent Playground & Mock Trial Arena</h3>
                <p className="text-xs text-[#888] font-mono">Test agent prompts, pit your Defense AI against a simulated Prosecution AI, or test multi-agent reasoning chains.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#777]">Arena Mode:</span>
              <span className="px-2.5 py-1 rounded bg-[#1c1b1b] border border-[#3a3939] text-xs font-mono text-[#c8a97e]">Multi-Agent Debate</span>
              <button className="px-3 py-1 bg-white hover:bg-[#eee] text-black font-bold text-xs font-mono uppercase rounded flex items-center gap-1.5 shadow">
                <span className="material-symbols-outlined text-xs">play_arrow</span>
                <span>Run Trial Simulation</span>
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-4 h-96">

            
            <div className="flex flex-col bg-[#161515] rounded-xl border border-[#2a2929] overflow-hidden">
              <div className="px-4 py-2.5 bg-[#1c1b1b] border-b border-[#2a2929] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-domine font-bold text-xs text-white">Agent 1: Lead Counsel AI (Defense)</span>
                  <span className="text-[10px] font-mono text-[#c8a97e] bg-[#2a241b] px-1.5 py-0.2 rounded">Lex-Jurist-v4</span>
                </div>
                <span className="text-[10px] font-mono text-[#888]">Temp: 0.15</span>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs custom-scroll">
                <div className="p-3 rounded-lg bg-[#201f1f] border border-[#2e2d2d] text-[#e0e0e0] leading-relaxed">
                  <span className="text-[#c8a97e] font-bold block mb-1">Defense Argument (Motion in Limine):</span>
                  "The state's warrantless acquisition of client cell-site location data violates <span className="text-[#c8a97e] underline">Carpenter v. United States, 585 U.S. 296 (2018)</span>. Tower logs spanning 48 hours without a Title III or Rule 41 warrant must be suppressed as fruit of the poisonous tree."
                </div>
                <div className="p-2.5 rounded bg-[#181717] border border-[#262525] text-[11px] text-[#888]">
                  <span className="text-emerald-400 font-semibold">[Self-Audit]:</span> Bluebook citation verified via 9th Cir. Repo. No Shepardized negative treatment found.
                </div>
              </div>

              
              <div className="p-2.5 bg-[#121111] border-t border-[#262525] flex items-center gap-2">
                <input type="text" placeholder="Inject Defense prompt directive..." className="flex-1 bg-[#181717] border border-[#333] rounded px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-[#c8a97e]" />
                <button className="px-2.5 py-1.5 bg-[#252424] hover:bg-[#333] text-white text-xs font-mono rounded">Inject</button>
              </div>
            </div>

            
            <div className="flex flex-col bg-[#161515] rounded-xl border border-[#2a2929] overflow-hidden">
              <div className="px-4 py-2.5 bg-[#1c1b1b] border-b border-[#2a2929] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  <span className="font-domine font-bold text-xs text-white">Agent 2: Prosecution Sparring Agent</span>
                  <span className="text-[10px] font-mono text-rose-300 bg-rose-950/80 px-1.5 py-0.2 rounded">Claude-3.5-Adversary</span>
                </div>
                <span className="text-[10px] font-mono text-[#888]">Temp: 0.40</span>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs custom-scroll">
                <div className="p-3 rounded-lg bg-[#241a1a] border border-[#3d2424] text-[#f0e2e2] leading-relaxed">
                  <span className="text-rose-400 font-bold block mb-1">Prosecution Counter-Argument:</span>
                  "Counsel mischaracterizes the scope. The collection fall squarely under the good-faith exception articulated in <span className="text-rose-300 underline">United States v. Leon, 468 U.S. 897</span> and exigent preservation requests under 18 U.S.C. § 2703(d). Defendant exhibited an immediate flight risk."
                </div>
                <div className="p-2.5 rounded bg-[#181717] border border-[#262525] text-[11px] text-[#888]">
                  <span className="text-rose-400 font-semibold">[Weakness Spotted]:</span> State is vulnerable on lack of contemporaneous affidavit proving exigent flight risk.
                </div>
              </div>

              
              <div className="p-2.5 bg-[#121111] border-t border-[#262525] flex items-center gap-2">
                <input type="text" placeholder="Inject Prosecution counter-directive..." className="flex-1 bg-[#181717] border border-[#333] rounded px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-rose-500" />
                <button className="px-2.5 py-1.5 bg-[#252424] hover:bg-[#333] text-white text-xs font-mono rounded">Inject</button>
              </div>
            </div>

          </div>
        </div>

        
        <div className="p-6 rounded-2xl bg-[#141313] border border-[#2a2929] space-y-4">
          <div className="flex items-center justify-between border-b border-[#242323] pb-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">Continuous Learning & Model Fine-Tuning</div>
              <h3 className="font-domine text-lg font-bold text-white mt-0.5">Train Custom Legal Weights (LoRA / QLoRA Pipeline)</h3>
            </div>
            <button className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono uppercase rounded flex items-center gap-1.5 shadow">
              <span className="material-symbols-outlined text-sm">upload_file</span>
              <span>Upload Training Dataset (.jsonl)</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 font-mono text-xs">
            
            <div className="p-4 rounded-xl bg-[#171616] border border-[#262525] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-sm font-domine">SDNY Local Rules LoRA</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px]">TRAINING (Epoch 3/5)</span>
              </div>
              <p className="text-[11px] text-[#888]">12,400 paired prompt-completions of local Southern District judge rules and motions.</p>
              
              
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[#999]">
                  <span>Loss: 0.084</span>
                  <span>62% Complete</span>
                </div>
                <div className="w-full bg-[#222] h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "62%" }}></div>
                </div>
              </div>
              <div className="text-[10px] text-[#666] flex justify-between pt-1">
                <span>VRAM: 18.2 GB / 24 GB</span>
                <span>ETA: 42 mins</span>
              </div>
            </div>

            
            <div className="p-4 rounded-xl bg-[#171616] border border-[#262525] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-sm font-domine">9th Circuit En Banc Adapter</span>
                <span className="px-1.5 py-0.5 rounded bg-[#2a241b] text-[#c8a97e] text-[10px]">READY (v3.2)</span>
              </div>
              <p className="text-[11px] text-[#888]">Comprehensive corpus of warrantless search precedents and wiretap suppression memos.</p>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[#999]">
                  <span>Loss: 0.041 (Converged)</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-[#222] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#c8a97e] h-full rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="text-[10px] text-[#666] flex justify-between pt-1">
                <span>Eval Benchmark: 98.6%</span>
                <button className="text-[#c8a97e] hover:underline font-bold">Mount to Agent</button>
              </div>
            </div>

            
            <div className="p-4 rounded-xl bg-[#171616] border border-[#262525] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-sm font-domine">Grand Jury Witness Cross</span>
                <span className="px-1.5 py-0.5 rounded bg-[#1f1e1e] text-[#888] text-[10px]">QUEUED</span>
              </div>
              <p className="text-[11px] text-[#888]">Impeachment dialogue datasets linking witness inconsistencies to sworn police reports.</p>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[#999]">
                  <span>Dataset: 34,000 pairs</span>
                  <span>Awaiting GPU Node #2</span>
                </div>
                <div className="w-full bg-[#222] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#444] h-full rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
              <div className="text-[10px] text-[#666] flex justify-between pt-1">
                <span>Batch Size: 16</span>
                <button className="text-white hover:underline font-bold">Prioritize</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>

      </div>
    </AppShell>
  );
}
