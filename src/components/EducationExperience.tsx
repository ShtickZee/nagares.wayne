import React from 'react'
import { BookOpen, Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'

export const EducationExperience: React.FC = () => {
  return (
    <section id="education" className="py-20 relative border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 mb-3">
            <span>Academic Background &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-50 tracking-tight">
            Education &amp; Capstone Leadership
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Formal training in Information Technology with specialized engineering focus in Web &amp; Mobile systems and applied edge machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Degree & University Card */}
          <div className="lg:col-span-7 bg-zinc-900 rounded-xl p-6 sm:p-8 border border-zinc-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-zinc-800">
              <div>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide block mb-1">
                  Candidate for Graduation &bull; Class of 2026
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Specialization in Web and Mobile Application Development
                </p>
              </div>

              <div className="text-xs text-zinc-400 sm:text-right shrink-0 font-mono">
                <div className="flex items-center gap-1.5 sm:justify-end text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>2022 &ndash; 2026</span>
                </div>
                <div className="flex items-center gap-1.5 sm:justify-end mt-1 text-zinc-500">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Lucena City, PH</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-200 mb-1.5">
                Manuel S. Enverga University Foundation (MSEUF)
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Academic program covering software engineering design patterns, cross-platform mobile architecture, relational database optimization, secure REST API design, and applied computer vision.
              </p>
            </div>

            {/* Key Coursework Matrix */}
            <div>
              <h5 className="text-xs uppercase tracking-wider text-zinc-400 mb-3 font-semibold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                <span>Core Academic Coursework</span>
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-zinc-300">
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
                    className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center gap-2"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Real-World Experience & Leadership */}
          <div className="lg:col-span-5 bg-zinc-900 rounded-xl p-6 sm:p-8 border border-zinc-800 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                <span className="uppercase tracking-wider font-semibold">Capstone Leadership</span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                Lead Machine Learning Engineer
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                NiyoSense Agricultural Intelligence Platform. Directed multimodal AI training, acoustic STFT Mel-spectrogram modeling, and edge inference optimization for Android hardware.
              </p>

              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-1">
                  <div className="font-medium text-zinc-200 flex justify-between">
                    <span>YOLOv8 Edge Model Architect</span>
                    <span className="font-mono text-zinc-400 text-[11px]">&lt;1s Latency</span>
                  </div>
                  <p className="text-zinc-500 text-[11px]">
                    Trained, validated, and quantized visual and acoustic neural networks for direct execution on mobile CPU via TensorFlow Lite.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-1">
                  <div className="font-medium text-zinc-200 flex justify-between">
                    <span>Multi-Platform Co-Developer</span>
                    <span className="font-mono text-zinc-400 text-[11px]">Django + Flutter</span>
                  </div>
                  <p className="text-zinc-500 text-[11px]">
                    Integrated offline SQLite transactions and cloud sync with central Django REST APIs behind Cloudflare edge proxies.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Role Pill */}
            <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs">
              <span className="font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                Target Opportunities
              </span>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Web Developer Intern &bull; Mobile App Developer (Flutter) &bull; Junior Full-Stack Engineer &bull; Applied Machine Learning Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
