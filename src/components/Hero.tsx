import React from 'react'
import { ArrowRight, FileText, Mail, Sparkles, Terminal, CheckCircle2 } from 'lucide-react'
import { GithubIcon as Github } from './GithubIcon'
import { PERSONAL_INFO } from '../data/portfolioData'

interface HeroProps {
  onOpenResume: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient mesh */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Web / Mobile / ML Internships</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Engineering{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Edge AI
              </span>
              , Fluid Mobile Apps &amp; Resilient Cloud APIs.
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>—a BSIT Web &amp; Mobile student at {PERSONAL_INFO.institution}. Lead ML Trainer on production-deployed agricultural edge systems, combining on-device <strong className="text-emerald-400 font-medium">YOLOv8 &amp; TFLite</strong> inference with <strong className="text-cyan-400 font-medium">Flutter</strong> mobile and <strong className="text-amber-400 font-medium">Django</strong> backends.
            </p>

            {/* Key Differentiators Quick Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-Device YOLOv8 &amp; 8-bit TFLite</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Offline-First Mobile with SQLite Cache</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Django REST Framework &amp; PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Production System Live at niyosense.me</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#niyosense"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 group"
              >
                <span>View NiyoSense Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm border border-white/10 transition-all hover:border-emerald-500/40"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View ATS Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile Terminal */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
              {/* Terminal Window Header */}
              <div className="bg-[#0a0d16] px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-slate-300 ml-1">wayne@workstation:~</span>
                </div>
                <span className="text-emerald-400 font-semibold">status: active</span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-3.5 bg-[#07090e]/90 text-slate-300">
                <div>
                  <span className="text-emerald-400 font-bold">$</span>{' '}
                  <span className="text-slate-200">whoami --verbose</span>
                </div>
                <div className="pl-3 border-l-2 border-emerald-500/40 space-y-1 text-slate-300">
                  <p><span className="text-slate-500">Name:</span> Wayne Yzon Nagares</p>
                  <p><span className="text-slate-500">Degree:</span> BS in Information Technology (BSIT)</p>
                  <p><span className="text-slate-500">Track:</span> Web &amp; Mobile Application Development</p>
                  <p><span className="text-slate-500">School:</span> Manuel S. Enverga University Foundation</p>
                  <p><span className="text-slate-500">Location:</span> Lucena City, Philippines</p>
                </div>

                <div>
                  <span className="text-emerald-400 font-bold">$</span>{' '}
                  <span className="text-slate-200">cat current_focus.json</span>
                </div>
                <div className="pl-3 border-l-2 border-cyan-500/40 text-slate-300 space-y-1">
                  <p><span className="text-cyan-400">"flagship":</span> "NiyoSense Ecosystem (v1.5.2)",</p>
                  <p><span className="text-cyan-400">"role":</span> "Lead YOLOv8 ML Trainer &amp; Full-Stack",</p>
                  <p><span className="text-cyan-400">"inference":</span> "Sub-1s 8-bit TFLite on Mobile CPU",</p>
                  <p><span className="text-cyan-400">"stack":</span> ["Flutter", "Django", "PostgreSQL", "SQLite"]</p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Ready for Internship / Entry Roles
                  </span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
