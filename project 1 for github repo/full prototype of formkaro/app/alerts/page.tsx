'use client'

import { Bell, AlertTriangle, Clock, CheckCircle2, ArrowLeft, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

const dummyAlerts = [
  {
    id: 1,
    title: 'SSC CGL Deadline Tomorrow - RED ALERT',
    description: 'Tier-1 application portal closes tomorrow at 11:59 PM. Ensure photo & signature are auto-resized.',
    type: 'red_alert',
    time: '10 mins ago',
    urgent: true,
  },
  {
    id: 2,
    title: 'UP Police Constable Photo Spec Updated',
    description: 'Recruitment board requires 350x450 px JPEG under 50KB. FormKaro Auto-Resizer has auto-formatted your photo.',
    type: 'info',
    time: '2 hours ago',
    urgent: false,
  },
  {
    id: 3,
    title: 'BPSC 70th Exam Form Fee Payment Reminder',
    description: 'Fee payment link is active. 1,929 posts available for Bihar domicile candidates.',
    type: 'warning',
    time: '1 day ago',
    urgent: false,
  },
]

export default function AlertsPage() {
  const router = useRouter()

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
              Vacancy <span className="text-[#7C3AED]">Alerts</span>
            </h1>
            <p className="text-[10px] text-gray-400">Real-time Govt Exam Deadlines & Updates</p>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
          <Bell className="w-5 h-5 animate-bounce" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* WhatsApp Notification Banner */}
        <div className="glass-card p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500 text-gray-950 font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Get Instant WhatsApp Alerts</p>
              <p className="text-[10px] text-emerald-300">Never miss a deadline or photo spec update</p>
            </div>
          </div>
          <a
            href="/upgrade"
            className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 text-xs font-extrabold transition-all"
          >
            Enable
          </a>
        </div>

        {/* Alerts List */}
        <div className="space-y-3">
          {dummyAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`glass-card p-4 rounded-2xl border transition-all ${
                alert.urgent
                  ? 'border-rose-500/50 bg-gradient-to-r from-rose-950/40 via-red-950/20 to-transparent shadow-lg shadow-rose-950/30'
                  : 'border-white/10 hover:bg-white/5'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  {alert.urgent ? (
                    <span className="px-2 py-0.5 rounded text-[9px] font-extrabold uppercase bg-rose-500 text-white border border-rose-400/50 animate-pulse flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      RED ALERT
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-white/10 text-gray-300">
                      UPDATE
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-gray-400">{alert.time}</span>
              </div>

              <h2 className="text-sm font-extrabold text-white mt-2 leading-snug">
                {alert.title}
              </h2>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                {alert.description}
              </p>

              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                <a
                  href="/feed"
                  className="text-[#7C3AED] hover:underline font-bold flex items-center gap-1"
                >
                  <span>Auto-Fill Vacancy Now</span>
                  <span>→</span>
                </a>
                <span className="text-gray-400">Verified Board Source</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
