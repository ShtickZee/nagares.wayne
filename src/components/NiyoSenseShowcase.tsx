import React, { useState } from 'react'
import {
  ExternalLink,
  Download,
  Cpu,
  Smartphone,
  Server,
  Layers,
  Zap,
  ChevronRight,
  Database
} from 'lucide-react'
import { GithubIcon as Github } from './GithubIcon'
import { NIYOSENSE_DETAILS } from '../data/portfolioData'
import { LateFusionSimulator } from './LateFusionSimulator'

export const NiyoSenseShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'architecture'>('overview')

  return (
    <section id="niyosense" className="py-20 relative border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Flagship Capstone Project • Live in Production</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-50 tracking-tight">
              NiyoSense Ecosystem
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Agricultural intelligence platform combining dual-model on-device YOLOv8, acoustic Mel-spectrogram DSP, and an offline-first mobile sync engine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={NIYOSENSE_DETAILS.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-medium text-xs hover:bg-emerald-400 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Web Portal</span>
            </a>
            <a
              href={NIYOSENSE_DETAILS.apkUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 text-zinc-200 font-medium text-xs hover:bg-zinc-800 border border-zinc-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-zinc-400" />
              <span>Download APK (v1.5.2)</span>
            </a>
            <a
              href={NIYOSENSE_DETAILS.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 text-zinc-300 font-medium text-xs hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
              title="View GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Source</span>
            </a>
          </div>
        </div>

        {/* Role & Contribution Callout */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider block">
                Engineering Role &amp; Scope
              </span>
              <h3 className="text-lg font-semibold text-zinc-100">
                Lead Machine Learning Engineer &amp; Supporting Full-Stack Developer
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl leading-relaxed">
                Trained and optimized the dual YOLOv8 visual and acoustic models, executed 8-bit integer quantization for on-device mobile execution, tuned the 70/30 late fusion decision pipeline, and co-developed the Django REST API endpoints and offline SQLite synchronization.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono">
                YOLOv8 &bull; INT8 TFLite
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono">
                Flutter &bull; Django
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-zinc-100 text-zinc-950 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Device Showcase</span>
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'simulator'
                ? 'bg-zinc-100 text-zinc-950 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Late Fusion Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-zinc-100 text-zinc-950 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>System Architecture &amp; Sync</span>
          </button>
        </div>

        {/* Tab 1: Overview & Split Device Presentation */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Visual Split-Device Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Laptop Web Dashboard Mockup */}
              <div className="lg:col-span-7 bg-zinc-900 rounded-xl p-5 border border-zinc-800 relative">
                <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-700" />
                    <span className="text-zinc-300 font-mono text-[11px]">niyosense.me/dashboard</span>
                  </div>
                  <span className="text-zinc-400 flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Cloudflare Proxy
                  </span>
                </div>

                {/* Dashboard UI Simulation */}
                <div className="mt-4 bg-zinc-950 rounded-lg p-4 border border-zinc-800/80 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-zinc-800/60">
                    <div>
                      <div className="text-[11px] text-zinc-500 uppercase tracking-wide">Harvest Management Portal</div>
                      <div className="text-sm font-semibold text-zinc-100">Batangas Sector 4 &bull; Batch #849</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-zinc-500 uppercase tracking-wide">Base Valuation</div>
                      <div className="text-sm font-semibold text-emerald-400">₱32.00 / pc (Buko)</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="bg-zinc-900/80 p-3 rounded-lg border border-zinc-800/80">
                      <div className="text-[11px] text-zinc-400">Total Scans</div>
                      <div className="text-lg font-bold text-zinc-100 mt-0.5">1,482 pcs</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">Dual-model verified</div>
                    </div>
                    <div className="bg-zinc-900/80 p-3 rounded-lg border border-zinc-800/80">
                      <div className="text-[11px] text-zinc-400">Buko Yield</div>
                      <div className="text-lg font-bold text-emerald-400 mt-0.5">73.4%</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">Grade A Premium</div>
                    </div>
                    <div className="bg-zinc-900/80 p-3 rounded-lg border border-zinc-800/80">
                      <div className="text-[11px] text-zinc-400">Valuation Gap</div>
                      <div className="text-lg font-bold text-zinc-200 mt-0.5">0.0%</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">Tamper-proof ledger</div>
                    </div>
                  </div>

                  {/* Batch Settlement Audit preview */}
                  <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800/80 space-y-1.5">
                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>Recent Field Sync Event</span>
                      <span className="text-zinc-300 font-mono text-[11px]">Session Authenticated</span>
                    </div>
                    <div className="text-xs text-zinc-300 flex items-center justify-between py-1 border-t border-zinc-800/60">
                      <span className="text-zinc-400 font-mono text-[11px]">Kamalig-Shed-A_Device-02</span>
                      <span className="text-emerald-400 text-xs">12 Scans Synced &bull; Late Fusion Pass</span>
                      <span className="text-zinc-500 text-[11px]">Just now</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Backend: Django 6.1 &bull; PostgreSQL 16</span>
                  <span>Render Cloud Container</span>
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-[280px] sm:w-[300px] rounded-[36px] border-[4px] border-zinc-700 bg-zinc-950 p-4 shadow-xl relative">
                  {/* Phone notch */}
                  <div className="w-24 h-3 bg-zinc-800 rounded-b-lg mx-auto mb-3" />

                  {/* App Screen Content */}
                  <div className="space-y-3 font-sans">
                    <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800">
                      <span className="font-semibold text-zinc-200">NiyoSense Field</span>
                      <span className="bg-zinc-800 text-emerald-400 px-2 py-0.5 rounded text-[10px] border border-zinc-700">
                        Offline Ready
                      </span>
                    </div>

                    {/* Camera Reticle Viewfinder Simulation */}
                    <div className="relative h-40 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col items-center justify-center p-3 text-center">
                      <div className="text-3xl mb-1">🥥</div>
                      <div className="text-xs text-zinc-200 font-medium">
                        Target Coconut Aligned
                      </div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">
                        HSV Gate: Passed &bull; 3 Knocks Detected
                      </div>

                      <div className="absolute bottom-2 left-2 right-2 bg-zinc-950/90 border border-zinc-800 px-2.5 py-1 rounded text-[10px] text-zinc-300 flex justify-between">
                        <span>Acoustic: 88%</span>
                        <span className="text-emerald-400 font-semibold">P_final: 84% Buko</span>
                      </div>
                    </div>

                    {/* Offline Storage Status */}
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 space-y-1">
                      <div className="flex justify-between text-[10px] text-zinc-400">
                        <span>Local SQLite Queue</span>
                        <span className="text-zinc-300">8 scans pending</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-2/3" />
                      </div>
                      <div className="text-[9px] text-zinc-500">
                        Auto-syncs upon network handshake
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="pt-0.5">
                      <div className="w-full py-2 bg-emerald-500 text-zinc-950 font-semibold text-xs rounded-lg text-center">
                        Scan Batch (1s)
                      </div>
                    </div>
                  </div>

                  {/* Home indicator bar */}
                  <div className="w-20 h-1 bg-zinc-700 rounded-full mx-auto mt-4" />
                </div>
              </div>
            </div>

            {/* Technical Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 mb-3.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">Dual YOLOv8 Model Training</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Trained two dedicated models: one for visual exocarp pigmentation and one for acoustic 128-band Mel-spectrograms. Quantized to INT8 for sub-1s mobile inference.
                </p>
                <div className="mt-3 pt-2.5 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                  img_best_v2.tflite + spec_best_v2.tflite
                </div>
              </div>

              <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 mb-3.5">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">Offline-First Flutter Client</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Engineered with an ACID-compliant SQLite local queue so farmers in remote harvest sheds can perform continuous grading without cellular reception.
                </p>
                <div className="mt-3 pt-2.5 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                  Flutter 3.x &bull; SQLite 3 &bull; tflite_flutter
                </div>
              </div>

              <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 mb-3.5">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">Django 6.1 &amp; Render Cloud</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Centralized REST API providing batch synchronization, dynamic pricing calculation, audit logs, and session authentication behind Cloudflare Edge security.
                </p>
                <div className="mt-3 pt-2.5 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                  Django REST &bull; PostgreSQL 16 &bull; Cloudflare
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Late Fusion Simulator */}
        {activeTab === 'simulator' && (
          <div>
            <LateFusionSimulator />
          </div>
        )}

        {/* Tab 3: Deep Technical Architecture & Sync */}
        {activeTab === 'architecture' && (
          <div className="bg-zinc-900 rounded-xl p-6 md:p-8 border border-zinc-800 space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-zinc-100 mb-1.5">
                NiyoSense End-to-End System Topology
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                Data pipeline from knuckle knocks and camera frames to local SQLite, syncing atomically with the central Django/PostgreSQL cloud.
              </p>
            </div>

            {/* Architecture Pipeline Cards */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-4">
              <div className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                1. Offline Field Device Pipeline (Flutter + Edge AI)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="font-semibold text-zinc-200">Camera Frame</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">224x224 RGB Exocarp (30%)</div>
                </div>
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="font-semibold text-zinc-200">Knock Audio</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">128 Mel-Bands STFT (70%)</div>
                </div>
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="font-semibold text-emerald-400">Late Fusion</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">&lt;1.0s on-device inference</div>
                </div>
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="font-semibold text-zinc-200">Local SQLite 3</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">ACID queue for offline sync</div>
                </div>
              </div>

              <div className="text-xs font-medium text-zinc-400 uppercase tracking-wide pt-2 border-t border-zinc-800">
                2. Cloud Synchronization Handshake
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="font-semibold text-zinc-200">Session Handshake</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Dynamic token pairing</div>
                </div>
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="font-semibold text-zinc-200">Django REST API</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">JWT Auth &bull; Cloudflare Proxy</div>
                </div>
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="font-semibold text-zinc-200">PostgreSQL 16</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Render Cloud Ledger</div>
                </div>
              </div>
            </div>

            {/* Concrete Contributions List */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-200 mb-3">Concrete Engineering Contributions:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                {NIYOSENSE_DETAILS.fullStackContributions.map((contrib, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contrib}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Stack Badges */}
            <div className="pt-2">
              <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
                Technologies &bull; Toolchain
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {NIYOSENSE_DETAILS.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-zinc-800/70 border border-zinc-700/80 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
