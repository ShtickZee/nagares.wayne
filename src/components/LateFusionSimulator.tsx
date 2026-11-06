import React, { useState } from 'react'
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'

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

  // Decision logic
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
    <div className="bg-zinc-900 rounded-xl p-6 md:p-8 border border-zinc-800">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-5 border-b border-zinc-800">
        <div>
          <h3 className="text-lg md:text-xl font-bold font-heading text-zinc-100">
            70/30 Acoustic-Dominant Late Fusion Simulator
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Simulate the multimodal inference formula and three pre-inference sensor guardrails designed for on-device edge deployment in the NiyoSense mobile app.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 font-mono text-xs text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Latency: &lt;180ms (TFLite INT8)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-7 space-y-5">
          {/* Slider 1: Acoustic Model */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="font-medium text-zinc-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-400" />
                Acoustic Knock Model (70% Weight)
              </span>
              <span className="font-mono text-zinc-100 font-semibold">{audioScore}%</span>
            </div>
            <p className="text-xs text-zinc-500">
              Inferred from 128-band Mel-spectrogram of knuckle-knock shell vibrations.
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={audioScore}
              onChange={(e) => setAudioScore(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Slider 2: Visual Model */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="font-medium text-zinc-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                Visual Exocarp Model (30% Weight)
              </span>
              <span className="font-mono text-zinc-100 font-semibold">{visualScore}%</span>
            </div>
            <p className="text-xs text-zinc-500">
              Inferred from camera reticle hue, surface texture, and stem pigmentation.
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={visualScore}
              onChange={(e) => setVisualScore(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Pre-Inference Guardrail Toggles */}
          <div className="pt-3 border-t border-zinc-800 space-y-2.5">
            <span className="text-xs uppercase tracking-wider text-zinc-500 block font-semibold">
              Pre-Inference Sensor Guardrails (Failsafes)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Gate 1 Toggle */}
              <div
                onClick={() => setIsCoconutHsvValid(!isCoconutHsvValid)}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  isCoconutHsvValid
                    ? 'bg-zinc-950 border-emerald-500/40 text-emerald-400'
                    : 'bg-zinc-950 border-red-500/40 text-red-400'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span>Gate 1: HSV Color Gate</span>
                  <span className="text-[11px] font-mono">{isCoconutHsvValid ? 'PASSED' : 'BLOCKED'}</span>
                </div>
                <div className="text-[11px] text-zinc-400 leading-tight">
                  {isCoconutHsvValid ? 'Valid coconut exocarp surface' : 'Non-coconut target detected'}
                </div>
              </div>

              {/* Gate 2 Strike Counter */}
              <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-950 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1">
                  <span>Gate 2: Knock Cadence</span>
                  <span className={`text-[11px] font-mono ${passedKnockGate ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {knockCount} Strikes {passedKnockGate ? '(Valid)' : '(Invalid)'}
                  </span>
                </div>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setKnockCount(num)}
                      className={`flex-1 py-0.5 text-xs font-mono rounded border transition-colors ${
                        knockCount === num
                          ? 'bg-zinc-100 text-zinc-950 font-bold border-zinc-100'
                          : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-zinc-200'
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

        {/* Right: Mathematical Output & Result */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-5">
          <div>
            <div className="flex items-center justify-between text-xs text-zinc-500 pb-2.5 border-b border-zinc-800 font-mono">
              <span>MULTIMODAL OUTPUT</span>
              <span className="text-zinc-400">EDGE INFERENCE</span>
            </div>

            {/* Math Formula Display */}
            <div className="my-3 p-3 bg-zinc-900 rounded-lg font-mono text-xs text-zinc-300 space-y-1.5 border border-zinc-800">
              <div className="text-zinc-500 text-[11px]">// Late Fusion Calculation</div>
              <div>
                P_final = (0.70 × <span className="text-zinc-100">{audioFraction.toFixed(2)}</span>) + (0.30 × <span className="text-zinc-100">{visualFraction.toFixed(2)}</span>)
              </div>
              <div className="text-zinc-100 font-semibold pt-1 border-t border-zinc-800 flex justify-between">
                <span>Weighted Confidence:</span>
                <span className="text-emerald-400">{finalScorePercent}%</span>
              </div>
              <div className="text-[11px] text-zinc-400 flex justify-between">
                <span>Model Divergence:</span>
                <span className={isConflictVeto ? 'text-amber-400 font-medium' : 'text-zinc-400'}>
                  {scoreDiffPercent}% {isConflictVeto ? '(Conflict Veto Active)' : '(<40% OK)'}
                </span>
              </div>
            </div>

            {/* Result Badge */}
            <div
              className={`p-3.5 rounded-lg border transition-colors ${
                statusType === 'success'
                  ? 'bg-zinc-900 border-emerald-500/40 text-emerald-400'
                  : statusType === 'warning'
                  ? 'bg-zinc-900 border-amber-500/40 text-amber-400'
                  : 'bg-zinc-900 border-red-500/40 text-red-400'
              }`}
            >
              <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm mb-1">
                {statusType === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />}
                {statusType === 'warning' && <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />}
                {statusType === 'error' && <XCircle className="w-4 h-4 shrink-0 text-red-400" />}
                <span>{decision}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">{explanation}</p>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-zinc-800 text-[11px] text-zinc-500 flex justify-between items-center">
            <span>YOLOv8-cls INT8</span>
            <span>Android / Flutter Pure-Dart</span>
          </div>
        </div>
      </div>
    </div>
  )
}
