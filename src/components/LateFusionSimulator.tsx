import React, { useState } from 'react'
import { Sliders, CheckCircle2, AlertTriangle, XCircle, Sparkles, Activity } from 'lucide-react'

export const LateFusionSimulator: React.FC = () => {
  // Audio confidence (0 - 100)
  const [audioScore, setAudioScore] = useState<number>(85)
  // Visual confidence (0 - 100)
  const [visualScore, setVisualScore] = useState<number>(75)
  // Sensor guardrail controls
  const [knockCount, setKnockCount] = useState<number>(3)
  const [isCoconutHsvValid, setIsCoconutHsvValid] = useState<boolean>(true)

  // Calculations
  const audioFraction = audioScore / 100
  const visualFraction = visualScore / 100

  // Guardrail 1: HSV luminance & color
  const passedHsvGate = isCoconutHsvValid

  // Guardrail 2: Acoustic Cadence (requires 2-4 strikes)
  const passedKnockGate = knockCount >= 2 && knockCount <= 4

  // Guardrail 3: Conflict Veto (> 40% divergence)
  const scoreDiffPercent = Math.abs(audioScore - visualScore)
  const isConflictVeto = scoreDiffPercent > 40

  // Late fusion formula: 70% audio, 30% visual
  const finalProbability = (0.70 * audioFraction) + (0.30 * visualFraction)
  const finalScorePercent = Math.round(finalProbability * 100)

  // Decision logic:
  // If finalScore >= 60% -> Buko (Soft Tender Meat)
  // Else -> Malauhog (Translucent Jelly Meat)
  let decision = ''
  let statusType: 'success' | 'warning' | 'error' = 'success'
  let explanation = ''

  if (!passedHsvGate) {
    decision = 'REJECTED: Non-Coconut Target'
    statusType = 'error'
    explanation = 'Gate 1 Tripped: Target failed HSV chromatic luminance thresholds. Inspection aborted.'
  } else if (!passedKnockGate) {
    decision = 'INVALID: Knock Cadence Fault'
    statusType = 'warning'
    explanation = `Gate 2 Tripped: Detected ${knockCount} strikes. System requires 2–4 distinct knuckle strikes.`
  } else if (isConflictVeto) {
    decision = 'VETO: Sensor Discrepancy'
    statusType = 'warning'
    explanation = `Gate 3 Tripped: Audio (${audioScore}%) and Visual (${visualScore}%) differ by ${scoreDiffPercent}% (>40% threshold). Flagged for manual audit.`
  } else if (finalScorePercent >= 60) {
    decision = 'GRADE: Buko (Soft Tender Meat)'
    statusType = 'success'
    explanation = `High acoustic shell density & hue alignment confirm Grade A Buko maturity (₱32/pc valuation).`
  } else {
    decision = 'GRADE: Malauhog (Translucent Jelly)'
    statusType = 'success'
    explanation = `Acoustic resonance frequency indicates younger internal endosperm gelatin stage (₱24/pc valuation).`
  }

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden border border-emerald-500/20 bg-gradient-to-b from-[#111522] to-[#0c0f1a]">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Architecture Widget</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span>70/30 Acoustic-Dominant Late Fusion Simulator</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Simulate the exact multimodal inference formula and 3 sensor guardrails designed and tuned by Wayne for edge deployment in the NiyoSense mobile app.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#0a0d15] px-4 py-2.5 rounded-xl border border-white/10 font-mono text-xs text-slate-300">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>Latency: &lt;180ms (TFLite INT8)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Acoustic Model */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Acoustic Knock Model (70% Weight)
              </span>
              <span className="font-mono text-cyan-400 font-bold">{audioScore}%</span>
            </div>
            <p className="text-xs text-slate-400">
              Inferred from 128-band Mel-spectrogram of knuckle-knock sound vibration.
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={audioScore}
              onChange={(e) => setAudioScore(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          {/* Slider 2: Visual Model */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                Visual Exocarp Model (30% Weight)
              </span>
              <span className="font-mono text-emerald-400 font-bold">{visualScore}%</span>
            </div>
            <p className="text-xs text-slate-400">
              Inferred from camera reticle hue, surface texture, and stem pigmentation.
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={visualScore}
              onChange={(e) => setVisualScore(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          {/* Pre-Inference Guardrail Toggles */}
          <div className="pt-3 border-t border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              Pre-Inference Sensor Guardrails (Failsafes)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Gate 1 Toggle */}
              <div
                onClick={() => setIsCoconutHsvValid(!isCoconutHsvValid)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  isCoconutHsvValid
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                    : 'bg-red-500/10 border-red-500/40 text-red-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span>Gate 1: HSV Color Gate</span>
                  <span>{isCoconutHsvValid ? 'PASSED' : 'BLOCKED'}</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {isCoconutHsvValid ? 'Valid coconut surface detected' : 'Non-coconut object in frame'}
                </div>
              </div>

              {/* Gate 2 Strike Counter */}
              <div className="p-3 rounded-xl border border-white/10 bg-[#0a0d15] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1">
                  <span>Gate 2: Knock Cadence</span>
                  <span className={`font-mono ${passedKnockGate ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {knockCount} Strikes {passedKnockGate ? '(Valid)' : '(Invalid)'}
                  </span>
                </div>
                <div className="flex gap-1.5 mt-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setKnockCount(num)}
                      className={`flex-1 py-1 text-[11px] font-mono rounded-md border transition-all ${
                        knockCount === num
                          ? 'bg-emerald-500 text-black font-bold border-emerald-400'
                          : 'bg-slate-800 text-slate-400 border-white/5 hover:text-white'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Live Mathematical Output & Telemetry */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#090c14] border border-white/10 rounded-2xl p-5">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/10">
              <span>MULTIMODAL OUTPUT</span>
              <span className="text-emerald-400">EDGE INFERENCE</span>
            </div>

            {/* Math Formula Display */}
            <div className="my-4 p-3 bg-black/40 rounded-xl font-mono text-xs text-slate-300 space-y-1.5 border border-white/5">
              <div className="text-slate-500 text-[11px]">// Late Fusion Calculation</div>
              <div>
                P_final = (0.70 × <span className="text-cyan-400">{audioFraction.toFixed(2)}</span>) + (0.30 × <span className="text-emerald-400">{visualFraction.toFixed(2)}</span>)
              </div>
              <div className="text-emerald-400 font-bold pt-1 border-t border-white/5 flex justify-between">
                <span>Weighted Confidence:</span>
                <span>{finalScorePercent}%</span>
              </div>
              <div className="text-[11px] text-slate-400 flex justify-between">
                <span>Model Divergence:</span>
                <span className={isConflictVeto ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                  {scoreDiffPercent}% {isConflictVeto ? '(Conflict Veto Active)' : '(<40% OK)'}
                </span>
              </div>
            </div>

            {/* Result Badge */}
            <div
              className={`p-4 rounded-xl border transition-all ${
                statusType === 'success'
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : statusType === 'warning'
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-400'
                  : 'bg-red-500/10 border-red-500/40 text-red-400'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm mb-1">
                {statusType === 'success' && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                {statusType === 'warning' && <AlertTriangle className="w-5 h-5 shrink-0" />}
                {statusType === 'error' && <XCircle className="w-5 h-5 shrink-0" />}
                <span>{decision}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{explanation}</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-500 flex justify-between items-center">
            <span>Model Version: YOLOv8-cls INT8</span>
            <span className="text-slate-400">Edge Device: Android / Flutter</span>
          </div>
        </div>
      </div>
    </div>
  )
}
