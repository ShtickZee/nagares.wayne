import React, { useState } from 'react'
import { ExternalLink, Smartphone, Server, Brain, Code, CheckCircle2 } from 'lucide-react'
import { GithubIcon as Github } from './GithubIcon'
import { SUPPORTING_PROJECTS, Project } from '../data/portfolioData'

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Mobile' | 'Web' | 'AI/ML'>('All')

  const filteredProjects =
    filter === 'All'
      ? SUPPORTING_PROJECTS
      : SUPPORTING_PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>Supporting Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Curated Projects &amp; Lab Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Targeted implementations demonstrating mobile offline persistence, secure API design, and digital signal processing pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 self-start">
            {(['All', 'Mobile', 'Web', 'AI/ML'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                  filter === cat
                    ? 'bg-emerald-500 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Top bar: Category badge + Role */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium ${
                      project.category === 'Mobile'
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/25'
                        : project.category === 'Web'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/25'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'
                    }`}
                  >
                    {project.category === 'Mobile' && <Smartphone className="w-3.5 h-3.5" />}
                    {project.category === 'Web' && <Server className="w-3.5 h-3.5" />}
                    {project.category === 'AI/ML' && <Brain className="w-3.5 h-3.5" />}
                    <span>{project.category}</span>
                  </span>

                  <span className="text-[11px] font-mono text-slate-400">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Key Metrics if available */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 my-3 p-2.5 bg-[#090c14] rounded-xl border border-white/5">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                        <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technical Highlights */}
                <div className="space-y-1.5 my-3">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tags & Links */}
              <div className="pt-4 border-t border-white/10 mt-4 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/5 text-[11px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
