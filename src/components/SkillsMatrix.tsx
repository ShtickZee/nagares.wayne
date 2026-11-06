import React from 'react'
import { Brain, Smartphone, Server, Cloud, CheckCircle2 } from 'lucide-react'
import { SKILLS_CATEGORIES } from '../data/portfolioData'

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 mb-3">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-50 tracking-tight">
            Engineering Skillset &amp; Toolchain
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Practical competencies spanning on-device neural network training, cross-platform mobile architecture, and cloud backend microservices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILLS_CATEGORIES.map((cat, idx) => {
            return (
              <div
                key={idx}
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                        {cat.icon === 'Brain' && <Brain className="w-4 h-4" />}
                        {cat.icon === 'Smartphone' && <Smartphone className="w-4 h-4" />}
                        {cat.icon === 'Server' && <Server className="w-4 h-4" />}
                        {cat.icon === 'Cloud' && <Cloud className="w-4 h-4" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-100">{cat.title}</h3>
                        <span className="text-xs text-zinc-500">
                          {cat.skills.length} Core Competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-[11px] text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 shrink-0">
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
