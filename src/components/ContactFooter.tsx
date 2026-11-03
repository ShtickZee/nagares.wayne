import React, { useState } from 'react'
import { Mail, Copy, Check, ExternalLink, MapPin, Send, Terminal } from 'lucide-react'
import { GithubIcon as Github } from './GithubIcon'
import { PERSONAL_INFO } from '../data/portfolioData'

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <footer id="contact" className="py-20 relative border-t border-white/10 bg-[#07090f]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Send className="w-3.5 h-3.5" />
              <span>Initiate Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Something Exceptional Together.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              I am actively seeking <strong className="text-white">BSIT Internship &amp; Junior Software Developer</strong> opportunities in Web Development, Mobile Engineering (Flutter), and Applied Edge Machine Learning.
            </p>
          </div>

          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Direct Contact Channel
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-white/10 font-mono text-xs text-slate-300">
              <div className="truncate mr-2">
                <span className="text-slate-500">Email:</span> {PERSONAL_INFO.email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors shrink-0 border border-emerald-500/30 font-semibold"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Internship%20/%20Opportunity%20Inquiry%20-%20Wayne%20Nagares`}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono text-center transition-all shadow-lg shadow-emerald-500/20"
              >
                Send Email Message
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs font-mono border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>&copy; {new Date().getFullYear()} Wayne Yzon Nagares. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {PERSONAL_INFO.location}
            </span>
            <span>•</span>
            <span className="text-emerald-400">MSEUF BSIT</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
