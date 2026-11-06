import React, { useState, useEffect } from 'react'
import { FileText, Menu, X } from 'lucide-react'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Clean Logo / Identity */}
          <a href="#" className="flex items-center gap-2.5 group text-zinc-100">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-semibold text-sm text-zinc-200 group-hover:border-zinc-500 transition-colors">
              W
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                Wayne Nagares
              </span>
              <span className="text-xs text-zinc-400 block -mt-0.5">
                BSIT • Web &amp; Mobile
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#niyosense" className="hover:text-zinc-100 transition-colors">
              NiyoSense
            </a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-zinc-100 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action: Clean Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-xs border border-zinc-700/80 transition-all hover:border-zinc-500"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700 font-medium text-xs"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 px-6 py-5 mt-2 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-zinc-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-zinc-100 py-1"
            >
              About
            </a>
            <a
              href="#niyosense"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-zinc-100 py-1 flex items-center justify-between"
            >
              <span>NiyoSense</span>
              <span className="text-xs bg-zinc-800 text-emerald-400 px-2 py-0.5 rounded border border-zinc-700">
                Live
              </span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-zinc-100 py-1"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-zinc-100 py-1"
            >
              Skills &amp; Stack
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-zinc-100 py-1"
            >
              Education &amp; Credentials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-zinc-100 py-1"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
