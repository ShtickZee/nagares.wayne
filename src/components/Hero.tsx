import React from 'react'
import { ArrowRight, FileText, Mail, CheckCircle2 } from 'lucide-react'
import { GithubIcon as Github } from './GithubIcon'
import { PERSONAL_INFO } from '../data/portfolioData'

interface HeroProps {
  onOpenResume: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-7">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Available for 2026 Web, Mobile &amp; ML Internships</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-zinc-50 tracking-tight leading-[1.15]">
            Engineering Edge AI, fluid mobile apps &amp; resilient cloud systems.
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Hi, I'm <span className="text-zinc-100 font-semibold">{PERSONAL_INFO.name}</span>—a BSIT Web &amp; Mobile student at {PERSONAL_INFO.institution}. Lead ML Trainer on production agricultural edge systems, combining on-device <span className="text-zinc-200 font-medium">YOLOv8 &amp; 8-bit TFLite</span> inference with <span className="text-zinc-200 font-medium">Flutter</span> mobile and <span className="text-zinc-200 font-medium">Django REST</span> backends.
          </p>

          {/* Clean Engineering Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>On-Device YOLOv8 &amp; 8-bit TFLite Quantization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Offline-First Mobile with ACID SQLite Cache</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Django REST Framework &amp; PostgreSQL 16</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Production Platform Live at niyosense.me</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#niyosense"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-sm transition-colors group"
            >
              <span>Explore NiyoSense Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-sm border border-zinc-700 transition-colors"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>View Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 font-medium text-sm transition-colors border border-transparent hover:border-zinc-800"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-zinc-400 hover:text-zinc-200 text-sm transition-colors ml-auto hidden sm:inline-flex"
            >
              <Mail className="w-4 h-4" />
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
