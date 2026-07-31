import { Sparkles, ArrowRight, Shield, Zap, FileText, CheckCircle2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#7C3AED] text-xs font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>FormKaro AI Platform v1.0 Live</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Never Fill a Govt Form <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-purple-400 to-indigo-400">
            Manually Again.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300">
          Create your Master Profile once. Automatically apply to UP, Bihar & National Govt job vacancies with auto-resizing photos, signatures, and instant eligibility validation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/profile"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-base transition-all shadow-lg glow-primary flex items-center justify-center gap-2 group"
          >
            <span>Build Master Profile</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/login"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-card text-white hover:bg-white/10 font-semibold text-base transition-all flex items-center justify-center"
          >
            Sign In with Google
          </a>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Master Candidate Profile</h3>
          <p className="text-sm text-gray-400">
            Store 10th/12th roll numbers, domicile state (UP/Bihar), category (OBC, SC, ST, EWS) in an encrypted vault.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Auto Resizer Engine</h3>
          <p className="text-sm text-gray-400">
            Compress and format your photo (20-50 KB) and signature (10-20 KB) instantly to exact exam board dimensions.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">1-Click Auto Fill</h3>
          <p className="text-sm text-gray-400">
            Inject your dossier directly into official vacancy portals without re-typing data or risking disqualification.
          </p>
        </div>
      </div>
    </div>
  )
}
