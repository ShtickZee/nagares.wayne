import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { NiyoSenseShowcase } from './components/NiyoSenseShowcase'
import { Projects } from './components/Projects'
import { SkillsMatrix } from './components/SkillsMatrix'
import { EducationExperience } from './components/EducationExperience'
import { ContactFooter } from './components/ContactFooter'
import { ResumeModal } from './components/ResumeModal'

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#080a10] text-[#f1f5f9] relative font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background Cyber-Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <NiyoSenseShowcase />
        <Projects />
        <SkillsMatrix />
        <EducationExperience />
      </main>

      {/* Contact & Footer */}
      <ContactFooter />

      {/* ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}

export default App
