import React from 'react'
import { Brain, Smartphone, Server, Cloud, Cpu, Terminal, CheckCircle2 } from 'lucide-react'
import { SKILLS_CATEGORIES } from '../data/portfolioData'

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative border-t border-white/5 bg-[#080b12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Skillset &amp; Toolchain
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A battle-tested stack spanning on-device neural network training, mobile cross-platform systems, and cloud backend microservices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_CATEGORIES.map((cat, idx) => {
            const isEmerald = cat.accent === 'emerald'
            const isCyan = cat.accent === 'cyan'
            const isAmber = cat.accent === 'amber'

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          isEmerald
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                            : isCyan
                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                            : isAmber
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                            : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                        }`}
                      >
                        {cat.icon === 'Brain' && <Brain className="w-5 h-5" />}
                        {cat.icon === 'Smartphone' && <Smartphone className="w-5 h-5" />}
                        {cat.icon === 'Server' && <Server className="w-5 h-5" />}
                        {cat.icon === 'Cloud' && <Cloud className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">{cat.title}</h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {cat.skills.length} Core Competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2.5 text-slate-200 font-medium">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 ${
                              isEmerald
                                ? 'text-emerald-400'
                                : isCyan
                                ? 'text-cyan-400'
                                : isAmber
                                ? 'text-amber-400'
                                : 'text-purple-400'
                            }`}
                          />
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-mono text-[11px] text-slate-400 px-2 py-0.5 rounded bg-black/40 border border-white/5 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
