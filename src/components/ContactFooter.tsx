import React, { useState } from 'react'
import { Copy, Check, MapPin } from 'lucide-react'
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
    <footer id="contact" className="py-20 relative border-t border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
              <span>Contact &amp; Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-zinc-50 tracking-tight">
              Let's connect and build.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              I am actively seeking <span className="text-zinc-200 font-medium">BSIT Internship &amp; Junior Software Developer</span> opportunities in Web Development, Mobile Engineering (Flutter), and Applied Edge Machine Learning.
            </p>
          </div>

          <div className="lg:col-span-5 bg-zinc-900 rounded-xl p-6 sm:p-7 border border-zinc-800 space-y-4">
            <div className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              Direct Inquiries
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300">
              <div className="truncate mr-2">
                {PERSONAL_INFO.email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors shrink-0 border border-zinc-700 text-xs"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Internship%20/%20Opportunity%20Inquiry%20-%20Wayne%20Nagares`}
                className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-xs text-center transition-colors"
              >
                Send Email
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs border border-zinc-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Wayne Yzon Nagares. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              {PERSONAL_INFO.location}
            </span>
            <span>&bull;</span>
            <span>Manuel S. Enverga University Foundation</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
