import React from 'react'
import { GraduationCap, Award, BookOpen, Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'

export const EducationExperience: React.FC = () => {
  return (
    <section id="education" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Capstone Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal training in Information Technology with deep specialization in Web &amp; Mobile engineering and applied edge computer vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Degree & University Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>CANDIDATE FOR GRADUATION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-sm font-medium text-cyan-400 mt-0.5">
                  Specialization in Web and Mobile Application Development
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                <div className="flex items-center gap-1.5 sm:justify-end text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Class of 2026</span>
                </div>
                <div className="flex items-center gap-1.5 sm:justify-end mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Lucena City, PH</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-2">
                Manuel S. Enverga University Foundation (MSEUF)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rigorous curriculum emphasizing software design patterns, full-stack web application development, mobile OS programming, relational database optimization, and applied artificial intelligence.
              </p>
            </div>

            {/* Key Coursework Matrix */}
            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>Core Academic Coursework</span>
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
                {[
                  'Mobile App Programming',
                  'Web Systems & Tech',
                  'Database Management (SQL)',
                  'Data Structures & Algo',
                  'Information Security',
                  'Software Engineering',
                  'Operating Systems & Networking',
                  'Human-Computer Interaction',
                  'Capstones & Systems Dev',
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-2"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Real-World Experience & Leadership */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>PROJECT LEADERSHIP</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Lead Machine Learning Engineer
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Collaborative Capstone Team — NiyoSense Agricultural Intelligence Platform. Directed multimodal AI training, acoustic STFT Mel-spectrogram modeling, and edge inference optimization for Android hardware.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/70 border border-white/5 space-y-1">
                  <div className="font-semibold text-white flex justify-between">
                    <span>YOLOv8 Edge Model Architect</span>
                    <span className="font-mono text-emerald-400 text-[11px]">&lt;1s Latency</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Trained, validated, and quantized visual and acoustic neural networks for direct execution on mobile CPU via TensorFlow Lite.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/70 border border-white/5 space-y-1">
                  <div className="font-semibold text-white flex justify-between">
                    <span>Multi-Platform Co-Developer</span>
                    <span className="font-mono text-cyan-400 text-[11px]">Django + Flutter</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Integrated offline SQLite transactions and cloud sync with central Django REST APIs behind Cloudflare edge proxies.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Role Pill */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
              <span className="font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                Target Roles
              </span>
              <p className="text-slate-200">
                Web Developer Intern • Mobile App Developer (Flutter) • Junior Full-Stack Engineer • Applied Machine Learning Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
