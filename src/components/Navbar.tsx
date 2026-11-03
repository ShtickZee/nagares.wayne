import React, { useState, useEffect } from 'react'
import { FileText, Menu, X, Sparkles, Terminal } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'

interface NavbarProps {
  onOpenResume: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080a10]/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <a href="#" className="flex items-center gap-2.5 group text-white">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-[#0a0d14] rounded-[11px] flex items-center justify-center font-mono font-bold text-emerald-400 group-hover:text-white transition-colors">
                <Terminal className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="font-bold text-base tracking-tight font-sans text-white group-hover:text-emerald-400 transition-colors">
                Wayne Nagares
              </span>
              <span className="text-[11px] font-mono text-slate-400 block -mt-0.5">
                BSIT • Web & Mobile
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#niyosense" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>NiyoSense</span>
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action: Status Pill + Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking 2026 Internship</span>
            </div>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs font-mono border border-white/10 transition-all hover:border-emerald-500/50"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-black font-semibold text-xs font-mono"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-5 mt-2 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              About
            </a>
            <a
              href="#niyosense"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1 flex items-center justify-between"
            >
              <span>NiyoSense (Featured Capstone)</span>
              <span className="text-xs font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                Live
              </span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Skills & Stack
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Education & Credentials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
