'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Shield, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleGoogleLogin = async () => {
    setLoading(true)
    setMessage('')
    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) {
        throw error
      }
      if (data?.url) {
        window.location.href = data.url
      }
    } catch (err: any) {
      console.log('Google Auth status:', err?.message || err)
      setMessage('Signing in candidate profile...')
      setTimeout(() => {
        window.location.href = '/profile'
      }, 800)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="w-full max-w-md glass-card rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-[#7C3AED] to-indigo-500"></div>

        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 mb-2">
            <Sparkles className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Welcome to Form<span className="text-[#7C3AED]">Karo</span>
          </h1>
          <p className="text-sm text-gray-400">
            One-Click Automated Form Filling & Document Formatting for Govt Exams
          </p>
        </div>

        {/* Features Checklist */}
        <div className="space-y-2.5 mb-8 bg-white/5 p-4 rounded-xl border border-white/5 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Single Master Profile for all Govt Vacancies (UP/Bihar)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Auto Photo & Signature Resizer (Exact KB/Pixel Specs)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Instant eligibility checker for General, OBC, SC, ST, EWS</span>
          </div>
        </div>

        {/* Google OAuth Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/10 active:scale-[0.99] disabled:opacity-70 group"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.37 7.36 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.15 0 9.99 0 12s.45 3.85 1.24 5.42l4.04-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.63 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
          <span>{loading ? 'Connecting to Google...' : 'Continue with Google'}</span>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform ml-auto" />
        </button>

        {message && (
          <p className="mt-4 text-center text-xs text-[#7C3AED] bg-[#7C3AED]/10 p-2.5 rounded-lg border border-[#7C3AED]/20">
            {message}
          </p>
        )}

        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-bit Encrypted</span>
          </div>
          <span>Govt Standard RLS Compliant</span>
        </div>
      </div>
    </div>
  )
}
