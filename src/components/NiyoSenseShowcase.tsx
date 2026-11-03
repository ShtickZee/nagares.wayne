import React, { useState } from 'react'
import {
  ExternalLink,
  Download,
  Cpu,
  Smartphone,
  Server,
  Layers,
  ShieldCheck,
  Zap,
  Radio,
  FileCode2,
  ChevronRight,
  Database
} from 'lucide-react'
import { GithubIcon as Github } from './GithubIcon'
import { NIYOSENSE_DETAILS } from '../data/portfolioData'
import { LateFusionSimulator } from './LateFusionSimulator'

export const NiyoSenseShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'architecture'>('overview')

  return (
    <section id="niyosense" className="py-20 relative">
      {/* Background glow element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Flagship Capstone Project • Live in Production</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              NiyoSense Ecosystem
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-3xl">
              Web & Mobile Coconut Maturity Profiling and Valuation Platform powered by Dual-Model Edge YOLOv8, Acoustic Mel-Spectrogram DSP, and an Offline-First Sync Engine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={NIYOSENSE_DETAILS.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Web Portal</span>
            </a>
            <a
              href={NIYOSENSE_DETAILS.apkUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-white font-medium text-sm hover:bg-slate-700 border border-white/10 transition-all"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download APK v1.5.2</span>
            </a>
            <a
              href={NIYOSENSE_DETAILS.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 text-slate-300 font-medium text-sm hover:text-white border border-white/10 transition-all"
              title="View GitHub Repository"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Source</span>
            </a>
          </div>
        </div>

        {/* My Role Callout Banner */}
        <div className="glass-panel rounded-2xl p-6 mb-10 border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-950/30 via-slate-900/60 to-transparent">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
                Author & Engineering Role
              </div>
              <h3 className="text-xl font-bold text-white">
                Wayne Yzon Nagares — Lead Machine Learning Engineer & Supporting Full-Stack Developer
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-4xl">
                Trained and optimized the dual YOLOv8 visual and acoustic models, executed 8-bit integer quantization for on-device mobile execution, developed the 70/30 late fusion decision pipeline, and co-developed the Django REST API endpoints and offline SQLite synchronization.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                Lead YOLOv8 Trainer
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                Flutter & Django
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Interactive Device Showcase</span>
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'simulator'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Late Fusion Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>Full-Stack Architecture & Sync</span>
          </button>
        </div>

        {/* Tab 1: Overview & Split Device Presentation */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Visual Split-Device Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Laptop Web Dashboard Mockup */}
              <div className="lg:col-span-7 glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-slate-300 ml-2">https://niyosense.me/dashboard</span>
                  </div>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Live Cloudflare Proxy
                  </span>
                </div>

                {/* Dashboard UI Simulation */}
                <div className="mt-4 bg-[#0a0d16] rounded-xl p-5 border border-white/5 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <div>
                      <div className="text-xs text-slate-400 font-mono">PLANTATION EXECUTIVE PORTAL</div>
                      <div className="text-base font-bold text-white">Batangas Sector 4 • Commercial Harvest Batch #849</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 font-mono">CURRENT BASE VALUE</div>
                      <div className="text-base font-bold text-emerald-400">₱32.00 / pc (Buko)</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-white/5">
                      <div className="text-[11px] font-mono text-slate-400">TOTAL SCANS</div>
                      <div className="text-xl font-bold text-white mt-1">1,482 pcs</div>
                      <div className="text-[10px] text-emerald-400 mt-1">100% verified</div>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-white/5">
                      <div className="text-[11px] font-mono text-slate-400">BUKO YIELD</div>
                      <div className="text-xl font-bold text-emerald-400 mt-1">73.4%</div>
                      <div className="text-[10px] text-slate-400 mt-1">Grade A Premium</div>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-white/5">
                      <div className="text-[11px] font-mono text-slate-400">VALUATION LEAKAGE</div>
                      <div className="text-xl font-bold text-cyan-400 mt-1">0.0%</div>
                      <div className="text-[10px] text-cyan-400 mt-1">Tamper-proof log</div>
                    </div>
                  </div>

                  {/* Batch Settlement Audit preview */}
                  <div className="p-3 bg-slate-900/40 rounded-lg border border-white/5 space-y-2">
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>RECENT MOBILE INGESTION STREAM</span>
                      <span className="text-emerald-400 font-semibold">QR Handshake Paired</span>
                    </div>
                    <div className="text-xs text-slate-300 font-mono flex items-center justify-between py-1 border-t border-white/5">
                      <span>Kamalig-Shed-A_Device-02</span>
                      <span className="text-emerald-400">Sync: 12 Scans • Late Fusion Pass</span>
                      <span className="text-slate-500">2s ago</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Backend: Django 6.1 • PostgreSQL 16</span>
                  <span>Render Cloud Container</span>
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-[300px] sm:w-[320px] rounded-[42px] border-[6px] border-slate-700 bg-[#080b12] p-4 shadow-2xl relative shadow-emerald-500/10">
                  {/* Phone notch */}
                  <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto mb-3" />

                  {/* App Screen Content */}
                  <div className="space-y-3 font-sans">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-white/10">
                      <span className="text-emerald-400 font-bold">NIYOSENSE FIELD</span>
                      <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px]">
                        OFFLINE ACTIVE
                      </span>
                    </div>

                    {/* Camera Reticle Viewfinder Simulation */}
                    <div className="relative h-44 rounded-2xl bg-slate-900 border border-emerald-500/40 overflow-hidden flex flex-col items-center justify-center p-3 text-center">
                      {/* Reticle corner markers */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-400" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />

                      <div className="text-3xl mb-1">🥥</div>
                      <div className="text-[11px] font-mono text-emerald-300 font-semibold">
                        YOLOv8 Edge Reticle Locked
                      </div>
                      <div className="text-[9px] text-slate-400 mt-1">
                        HSV Gate: OK • RMS Knocks: 3 Strikes
                      </div>

                      <div className="absolute bottom-2 left-3 right-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-slate-300 flex justify-between">
                        <span>Acoustic: 88%</span>
                        <span className="text-emerald-400">P_final: 84% Buko</span>
                      </div>
                    </div>

                    {/* Offline Storage Status */}
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>LOCAL SQLITE QUEUE</span>
                        <span className="text-cyan-400">8 scans waiting</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full w-2/3" />
                      </div>
                      <div className="text-[9px] text-slate-500">
                        Auto-syncs via QR session handshake upon WiFi/LTE detect
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-1">
                      <div className="w-full py-2 bg-emerald-500 text-black font-bold text-xs rounded-xl text-center shadow-lg shadow-emerald-500/20">
                        SCAN COCONUT BATCH (1s)
                      </div>
                    </div>
                  </div>

                  {/* Home indicator bar */}
                  <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto mt-4" />
                </div>
              </div>
            </div>

            {/* Technical Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Dual YOLOv8 Model Training</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Trained two dedicated models: one for visual husk pigmentation and one for acoustic 128-band Mel-spectrograms. Quantized to INT8 for sub-1s latency on mid-range Android CPUs.
                </p>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-emerald-400">
                  img_best_v2.tflite + spec_best_v2.tflite
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Offline-First Flutter Client</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Engineered with an ACID-compliant SQLite local queue so farmers in remote harvest groves can perform continuous grading without cellular connection.
                </p>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-cyan-400">
                  Flutter 3.x • SQLite 3 • tflite_flutter
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Django 6.1 & Render Cloud</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Centralized REST API providing batch synchronization, dynamic pricing calculation, audit logs, and passkey authentication behind Cloudflare Edge security.
                </p>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-amber-400">
                  Django REST • PostgreSQL 16 • Cloudflare
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Late Fusion Simulator */}
        {activeTab === 'simulator' && (
          <div className="space-y-6">
            <LateFusionSimulator />
          </div>
        )}

        {/* Tab 3: Deep Technical Architecture & Sync */}
        {activeTab === 'architecture' && (
          <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/10 space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                NiyoSense End-to-End System Topology
              </h3>
              <p className="text-sm text-slate-400 max-w-3xl">
                How data flows from on-field knuckle knocks and camera frames to local SQLite, and eventually syncs with the centralized Django/PostgreSQL cloud.
              </p>
            </div>

            {/* Architecture Flowchart */}
            <div className="bg-[#090c14] border border-white/10 rounded-xl p-5 font-mono text-xs text-slate-300 space-y-4 overflow-x-auto">
              <div className="text-slate-500">// Offline Field Device Layer (Flutter + Edge AI)</div>
              <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <div className="p-3 bg-slate-900 border border-emerald-500/30 rounded-lg text-emerald-300 w-full md:w-auto">
                  Camera Frame (224x224 RGB)
                  <div className="text-[10px] text-slate-400">Visual YOLOv8-cls (30%)</div>
                </div>
                <span className="text-slate-500 font-bold">+</span>
                <div className="p-3 bg-slate-900 border border-cyan-500/30 rounded-lg text-cyan-300 w-full md:w-auto">
                  Knock Audio (STFT DSP)
                  <div className="text-[10px] text-slate-400">128 Mel-Bands YOLOv8 (70%)</div>
                </div>
                <span className="text-slate-500 font-bold">➔</span>
                <div className="p-3 bg-slate-900 border border-amber-500/30 rounded-lg text-amber-300 w-full md:w-auto">
                  Late Fusion & Guardrails
                  <div className="text-[10px] text-slate-400">&lt;1.0s on-device inference</div>
                </div>
                <span className="text-slate-500 font-bold">➔</span>
                <div className="p-3 bg-slate-900 border border-purple-500/30 rounded-lg text-purple-300 w-full md:w-auto">
                  Local SQLite 3 Cache
                  <div className="text-[10px] text-slate-400">ACID Transaction Queue</div>
                </div>
              </div>

              <div className="text-slate-500 pt-3 border-t border-white/5">// Synchronization Handshake to Cloud</div>
              <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <div className="p-3 bg-slate-900 border border-white/10 rounded-lg text-slate-300 w-full md:w-auto">
                  Dynamic QR Handshake
                  <div className="text-[10px] text-slate-400">Ephemeral Session Pairing</div>
                </div>
                <span className="text-slate-500 font-bold">➔</span>
                <div className="p-3 bg-slate-900 border border-emerald-500/30 rounded-lg text-emerald-300 w-full md:w-auto">
                  Django REST API (SimpleJWT)
                  <div className="text-[10px] text-slate-400">Cloudflare Edge CDN Proxy</div>
                </div>
                <span className="text-slate-500 font-bold">➔</span>
                <div className="p-3 bg-slate-900 border border-blue-500/30 rounded-lg text-blue-300 w-full md:w-auto">
                  Render PostgreSQL 16
                  <div className="text-[10px] text-slate-400">Commercial Settlement Ledger</div>
                </div>
              </div>
            </div>

            {/* Concrete Contributions List */}
            <div>
              <h4 className="text-base font-bold text-white mb-3">Wayne's Concrete Engineering Contributions:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
                {NIYOSENSE_DETAILS.fullStackContributions.map((contrib, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                    <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Stack Badges */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                Technologies Utilized
              </h4>
              <div className="flex flex-wrap gap-2">
                {NIYOSENSE_DETAILS.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
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
