import React from 'react'
import { X, Printer, ExternalLink, Mail, MapPin } from 'lucide-react'
import { GithubIcon as Github } from './GithubIcon'
import { PERSONAL_INFO, NIYOSENSE_DETAILS } from '../data/portfolioData'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Top Actions Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-zinc-800 bg-zinc-900">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">
              Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors border border-zinc-700"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-zinc-300 text-sm font-sans bg-zinc-950">
          {/* Document Header */}
          <div className="text-center pb-6 border-b border-zinc-800 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-zinc-50 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-zinc-400">
              BSIT Web &amp; Mobile Developer &bull; Edge Machine Learning Engineer
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-zinc-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-500" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-zinc-400" />
                {PERSONAL_INFO.email}
              </span>
              <a
                href={NIYOSENSE_DETAILS.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-zinc-300 hover:text-white underline underline-offset-2"
              >
                <Github className="w-3 h-3" />
                github.com/Cbolea23/niyosense-capstone
              </a>
              <a
                href="https://niyosense.me"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                <ExternalLink className="w-3 h-3" />
                niyosense.me
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 border-b border-zinc-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Bachelor of Science in Information Technology (BSIT) student specializing in Web and Mobile Application Development at Manuel S. Enverga University Foundation. Proven track record as Lead Machine Learning Engineer on NiyoSense—a live, production-deployed agricultural intelligence platform featuring on-device dual YOLOv8 inference, 128-band Mel-spectrogram digital signal processing, an offline-first Flutter mobile client with ACID SQLite queue, and a centralized Django 6.1 REST backend.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 border-b border-zinc-800 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-xs">
              <div>
                <strong className="text-zinc-100 font-semibold">
                  Manuel S. Enverga University Foundation (MSEUF)
                </strong>
                <div className="text-zinc-300">
                  Bachelor of Science in Information Technology (BSIT)
                </div>
                <div className="text-zinc-400 text-[11px]">
                  Specialization: Web and Mobile Application Development
                </div>
              </div>
              <div className="text-zinc-400 text-xs mt-1 sm:mt-0 text-right">
                <div>Lucena City, Philippines</div>
                <div className="text-zinc-300 font-medium">Expected 2026</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 border-b border-zinc-800 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
                <span className="font-semibold text-zinc-200 text-[11px] block">
                  Machine Learning &amp; Edge AI
                </span>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  YOLOv8, TensorFlow Lite (TFLite), 8-bit Post-Training Quantization, Digital Signal Processing (STFT, Mel-Spectrograms), Python, OpenCV, Multimodal Late Fusion.
                </p>
              </div>

              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
                <span className="font-semibold text-zinc-200 text-[11px] block">
                  Mobile Application Development
                </span>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Flutter 3.x, Dart, Offline-First Architecture, SQLite 3 (ACID), tflite_flutter, Camera &amp; Audio Stream Controllers, QR Barcode Scanner.
                </p>
              </div>

              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
                <span className="font-semibold text-zinc-200 text-[11px] block">
                  Web &amp; Backend Engineering
                </span>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Python, Django 6.1, Django REST Framework (DRF), SimpleJWT Authentication, React, TypeScript, Tailwind CSS, HTML5, RESTful APIs.
                </p>
              </div>

              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
                <span className="font-semibold text-zinc-200 text-[11px] block">
                  Databases, Cloud &amp; Tooling
                </span>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  PostgreSQL 16, SQLite 3, Git, GitHub Actions (CI/CD), Render Cloud Platform, Cloudflare CDN/DNS/Proxy, Cloudinary Media CDN.
                </p>
              </div>
            </div>
          </div>

          {/* Project Experience */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 border-b border-zinc-800 pb-1">
              Featured Engineering Experience
            </h2>

            {/* NiyoSense Experience */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between text-xs">
                <div>
                  <strong className="text-zinc-100 font-semibold">
                    NiyoSense &mdash; Web &amp; Mobile Coconut Maturity Profiling &amp; Valuation System
                  </strong>
                  <div className="text-zinc-400 text-[11px]">
                    Role: Lead Machine Learning Engineer &amp; Supporting Full-Stack Developer
                  </div>
                </div>
                <div className="text-xs text-zinc-400 text-right mt-1 sm:mt-0 font-mono">
                  <span className="text-emerald-400 font-medium">Production Live &bull; v1.5.2</span>
                  <div>2026</div>
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-400 leading-relaxed">
                <li>
                  <strong className="text-zinc-200">Lead YOLOv8 Neural Network Architect:</strong> Trained dual YOLOv8 models—one for visual exocarp texture/hue classification and one for 128-band Mel-spectrogram acoustic knuckle-knock resonance.
                </li>
                <li>
                  <strong className="text-zinc-200">Edge Quantization &amp; Latency Optimization:</strong> Executed post-training 8-bit integer quantization (INT8) using TensorFlow Lite, slashing model memory footprint and achieving on-device inference in under 1 second on Android mobile CPUs without requiring internet.
                </li>
                <li>
                  <strong className="text-zinc-200">Multimodal Late Fusion Pipeline:</strong> Formulated and tuned the 70/30 acoustic-dominant decision rule (P_final = 0.70 P_audio + 0.30 P_visual) and implemented pre-inference guardrails (HSV color validation, 2–4 strike knock cadence check, and 40% conflict veto).
                </li>
                <li>
                  <strong className="text-zinc-200">Full-Stack &amp; Offline Sync Integration:</strong> Co-developed the central Django 6.1 backend, JWT session authorization, and an ACID-compliant local SQLite queue in Flutter for remote sheds (<em>kamalig</em>), syncing to Render PostgreSQL 16 via dynamic session handshakes.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer info & close */}
        <div className="px-6 py-3.5 border-t border-zinc-800 bg-zinc-900 flex items-center justify-between text-xs text-zinc-400">
          <span>Wayne Yzon Nagares &bull; MSEUF BSIT</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition-colors border border-zinc-700"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  )
}
