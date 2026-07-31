'use client'

import { Flame, Award, Lock, CheckCircle2, Shield, Zap, Clock, IndianRupee, Sparkles } from 'lucide-react'
import BottomNav from '@/components/BottomNav'

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-[#040506] text-white max-w-md mx-auto pb-28 relative overflow-x-hidden">
      {/* Header with Duolingo-style Streak */}
      <header className="p-4 flex items-center justify-between glass-card border-b border-white/10 sticky top-0 z-30 bg-[#040506]/90 backdrop-blur-md">
        <div>
          <h1 className="text-base font-extrabold tracking-tight text-white">
            My Candidate <span className="text-[#7C3AED]">Journey</span>
          </h1>
          <p className="text-[10px] text-gray-400">Gamified Form Savings & Milestones</p>
        </div>

        {/* Duolingo-Style Fire Streak Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 text-orange-400 font-extrabold text-xs shadow-lg glow-primary animate-pulse">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          <span>🔥 1 Din Streak</span>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Journey Stats Dashboard */}
        <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-4 relative overflow-hidden bg-gradient-to-br from-[#7C3AED]/20 via-purple-950/40 to-[#040506]">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#7C3AED]/30 text-purple-200 border border-[#7C3AED]/40">
              Level 1 Candidate
            </span>
            <div className="flex items-center gap-1 text-[11px] text-amber-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>150 XP</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-white">Total Savings Summary</h2>
            <p className="text-xs text-gray-400">Cyber Cafe visits avoided using FormKaro AI.</p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 pt-1">
            {/* Stat 1 */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center space-y-1">
              <Clock className="w-4 h-4 text-amber-400 mx-auto" />
              <p className="text-xs font-extrabold text-white">4.5 Hrs</p>
              <p className="text-[9px] text-gray-400">Time Saved</p>
            </div>

            {/* Stat 2 */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center space-y-1">
              <IndianRupee className="w-4 h-4 text-emerald-400 mx-auto" />
              <p className="text-xs font-extrabold text-emerald-400">₹350</p>
              <p className="text-[9px] text-gray-400">Money Saved</p>
            </div>

            {/* Stat 3 */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center space-y-1">
              <Zap className="w-4 h-4 text-purple-400 mx-auto" />
              <p className="text-xs font-extrabold text-purple-300">2 Forms</p>
              <p className="text-[9px] text-gray-400">Auto Filled</p>
            </div>
          </div>
        </div>

        {/* Badges Grid Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#7C3AED]" />
              <h2 className="text-base font-extrabold text-white">Achievements & Badges</h2>
            </div>
            <span className="text-[10px] text-gray-400">1 / 3 Unlocked</span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {/* BADGE 1: First Timer (Unlocked & Colorized) */}
            <div className="glass-card p-4 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-purple-950/20 to-transparent flex items-center justify-between shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-gray-950 font-extrabold flex items-center justify-center shadow-lg shadow-amber-500/30 glow-primary">
                  <Award className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-extrabold text-white">First Timer</h3>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full">
                      UNLOCKED
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Completed your first 1-Click Form Application.
                  </p>
                  <p className="text-[10px] text-amber-400 font-mono mt-1">Unlocked: Today</p>
                </div>
              </div>

              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 ml-2" />
            </div>

            {/* BADGE 2: Speed Runner (Locked & Dimmed) */}
            <div className="glass-card p-4 rounded-2xl border border-white/5 bg-white/[0.02] opacity-60 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-white/10 text-gray-500 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-gray-300">Speed Runner</h3>
                    <span className="px-2 py-0.5 text-[9px] font-semibold bg-gray-800 text-gray-400 border border-white/10 rounded-full">
                      LOCKED
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Complete 5 form applications in under 2 minutes.
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono mt-1">Progress: 2 / 5</p>
                </div>
              </div>

              <Lock className="w-4 h-4 text-gray-500 flex-shrink-0 ml-2" />
            </div>

            {/* BADGE 3: Pro Member (Locked & Dimmed) */}
            <div className="glass-card p-4 rounded-2xl border border-white/5 bg-white/[0.02] opacity-60 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-white/10 text-gray-500 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-gray-300">Pro Member</h3>
                    <span className="px-2 py-0.5 text-[9px] font-semibold bg-gray-800 text-gray-400 border border-white/10 rounded-full">
                      LOCKED
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Upgrade to FormKaro Pro for unlimited auto fills.
                  </p>
                  <p className="text-[10px] text-purple-400 font-mono mt-1">Requires FormKaro Pro</p>
                </div>
              </div>

              <Lock className="w-4 h-4 text-gray-500 flex-shrink-0 ml-2" />
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
