'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Crown,
  Check,
  Zap,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'
import BottomNav from '@/components/BottomNav'

export default function UpgradePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePayViaUPI = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      // Redirect to /journey after showing success
      setTimeout(() => {
        router.push('/journey')
      }, 1500)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#040506] text-white max-w-md mx-auto pb-28 relative overflow-x-hidden">
      {/* Header */}
      <header className="p-4 flex items-center justify-between glass-card border-b border-white/10 sticky top-0 z-30 bg-[#040506]/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-extrabold text-white">
              FormKaro <span className="text-[#7C3AED]">Pro</span>
            </h1>
            <p className="text-[10px] text-gray-400">Unlock WhatsApp Alerts & Priority Engine</p>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30">
          <Crown className="w-5 h-5" />
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Social Proof Heading Banner */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 text-center space-y-3 relative overflow-hidden bg-gradient-to-b from-[#7C3AED]/25 via-purple-950/40 to-[#040506]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Live Sync</span>
          </div>

          <h2 className="text-2xl font-extrabold text-white leading-tight">
            2,847 Aspirants are getting WhatsApp Alerts right now.
          </h2>

          <p className="text-xs text-gray-300">
            Never miss a government vacancy deadline, age relaxation update, or photo specification change.
          </p>
        </div>

        {/* Pricing Card (₹49/month) */}
        <div className="glass-card p-6 rounded-3xl border-2 border-[#7C3AED] shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent space-y-6">
          <div className="absolute top-0 right-0 bg-[#7C3AED] text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-md">
            Most Popular
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">₹49</span>
              <span className="text-sm text-gray-400 font-medium">/ month</span>
            </div>
            <p className="text-xs text-purple-300 font-semibold">Cancel anytime. No auto-debit traps.</p>
          </div>

          {/* Included Pro Features */}
          <div className="space-y-3 pt-3 border-t border-white/10 text-xs text-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-white">Instant WhatsApp Deadline & Red Alerts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Unlimited Photo & Signature Auto-Resizing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Priority 1-Click Auto Fill Engine</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Unlock Exclusive 'Pro Member' Badge & XP</span>
            </div>
          </div>

          {/* Pay via UPI Button */}
          <div className="pt-2">
            {!success ? (
              <button
                onClick={handlePayViaUPI}
                disabled={loading}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-purple-600 to-indigo-600 hover:from-[#6D28D9] hover:to-indigo-500 text-white font-extrabold text-base transition-all shadow-xl shadow-purple-500/30 glow-primary flex items-center justify-center gap-3 disabled:opacity-80 active:scale-98"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>Processing UPI Payment...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 text-amber-300" />
                    <span>Pay via UPI (GPay / PhonePe)</span>
                  </>
                )}
              </button>
            ) : (
              <div className="w-full py-4 px-6 rounded-2xl bg-emerald-500 text-gray-950 font-extrabold text-base flex items-center justify-center gap-2 shadow-xl animate-bounce">
                <CheckCircle2 className="w-6 h-6" />
                <span>Pro Activated! Redirecting to Journey...</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 pt-2 border-t border-white/5">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>NPCI Encrypted</span>
            </div>
            <span>•</span>
            <span>Supports GPay, PhonePe, Paytm, BHIM</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
