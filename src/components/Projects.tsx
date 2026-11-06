import React, { useState } from 'react'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { GithubIcon as Github } from './GithubIcon'
import { SUPPORTING_PROJECTS, Project } from '../data/portfolioData'

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Mobile' | 'Web' | 'AI/ML'>('All')

  const filteredProjects =
    filter === 'All'
      ? SUPPORTING_PROJECTS
      : SUPPORTING_PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 relative border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 mb-3">
              <span>Supporting Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-50 tracking-tight">
              Selected Systems &amp; Lab Projects
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Targeted implementations demonstrating offline data synchronization, secure authorization architecture, and digital signal processing pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800 self-start">
            {(['All', 'Mobile', 'Web', 'AI/ML'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  filter === cat
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Top bar: Category badge + Role */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {project.category}
                  </span>

                  <span className="text-xs text-zinc-500">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Key Metrics if available */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 my-3 p-2.5 bg-zinc-950 rounded-lg border border-zinc-800/80">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wide">{m.label}</div>
                        <div className="text-xs font-semibold text-zinc-200 font-mono mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technical Highlights */}
                <div className="space-y-1.5 my-3">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tags & Links */}
              <div className="pt-4 border-t border-zinc-800/80 mt-4 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/60 text-[11px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors"
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
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors ml-auto"
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
