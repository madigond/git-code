'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import {
  Copy,
  Check,
  Download,
  CheckCircle2,
  Building2,
  Calendar,
  IndianRupee,
  ShieldCheck,
  User,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  FileCheck2,
  Flame,
  Zap,
} from 'lucide-react'
import vacanciesData from '@/data/vacancies.json'
import BottomNav from '@/components/BottomNav'

// Dynamically import Confetti for SSR compatibility
const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false })

// Dummy Candidate Master Profile Data
const dummyProfile = {
  fullName: 'Rahul Sharma',
  dob: '2001-05-15',
  state: 'Uttar Pradesh',
  category: 'OBC',
  tenthRoll: 'UP10-2017-849201',
  tenthMarks: '86.4%',
  twelfthRoll: 'UP12-2019-920412',
  twelfthMarks: '84.2%',
}

export default function ApplyPage() {
  const params = useParams()
  const router = useRouter()
  const vacancyId = params?.id as string

  // Lookup vacancy details
  const vacancy = vacanciesData.find((v) => v.id === vacancyId) || vacanciesData[0]

  // State management
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [isApplied, setIsApplied] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({ width: 400, height: 800 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  const handleCopy = (fieldLabel: string, textValue: string) => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(textValue)
    }
    setCopiedField(fieldLabel)
    setToastMessage(`Copied "${textValue}" to clipboard!`)
    setTimeout(() => {
      setCopiedField(null)
      setToastMessage(null)
    }, 2500)
  }

  const handleDownload = (docName: string, targetSize: string) => {
    setToastMessage(`Downloading auto-resized ${docName} (${targetSize})...`)

    const canvas = document.createElement('canvas')
    canvas.width = docName.includes('Photo') ? 350 : 200
    canvas.height = docName.includes('Photo') ? 450 : 80
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#1e1b4b'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#7C3AED'
      ctx.font = '14px sans-serif'
      ctx.fillText(`FormKaro ${docName}`, 20, canvas.height / 2)
    }

    const link = document.createElement('a')
    link.download = `Rahul_Sharma_${docName.replace(/\s+/g, '_')}.jpg`
    link.href = canvas.toDataURL('image/jpeg', 0.8)
    link.click()

    setTimeout(() => setToastMessage(null), 3000)
  }

  const handleMarkApplied = () => {
    setIsApplied(true)
    setShowConfetti(true)
    setToastMessage('🎉 Badhai ho! Tu ₹150 aur 2 ghante bacha liya!')

    // Stop confetti after 3 seconds
    setTimeout(() => {
      setShowConfetti(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#040506] text-white max-w-md mx-auto pb-28 relative overflow-x-hidden">
      {/* Full-Screen Confetti Animation */}
      {showConfetti && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={250}
          recycle={false}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 inset-x-4 z-50 max-w-sm mx-auto p-4 rounded-2xl bg-[#7C3AED] text-white text-xs font-bold shadow-2xl glow-primary flex items-center justify-between border border-purple-400/40 animate-bounce">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300 flex-shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <Check className="w-4 h-4 text-emerald-300" />
        </div>
      )}

      {/* Header */}
      <header className="p-4 flex items-center gap-3 glass-card border-b border-white/10 sticky top-0 z-30 bg-[#040506]/90 backdrop-blur-md">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-base font-extrabold text-white truncate max-w-[240px]">
            {vacancy.title}
          </h1>
          <p className="text-[10px] text-gray-400">1-Click Auto Fill & Copy Assistant</p>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Vacancy Info Summary Card */}
        <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-3 relative overflow-hidden bg-gradient-to-br from-[#7C3AED]/20 to-purple-950/40">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {vacancy.state}
            </span>
            <span className="text-xs font-bold text-emerald-400 font-mono">Fee: ₹{vacancy.fee}</span>
          </div>

          <h2 className="text-lg font-bold text-white leading-tight">{vacancy.title}</h2>
          <p className="text-xs text-gray-300">{vacancy.department}</p>

          <div className="flex items-center gap-4 text-xs text-gray-400 pt-2 border-t border-white/10">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Deadline: {vacancy.deadline}</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-purple-400" />
              <span>{vacancy.totalPosts}</span>
            </div>
          </div>
        </div>

        {/* Vertical Copy List section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#7C3AED]" />
              <h3 className="text-sm font-bold text-white">Master Profile Copy Assistant</h3>
            </div>
            <span className="text-[10px] text-gray-400">Click icon to copy to clipboard</span>
          </div>

          {/* List of Fields */}
          <div className="space-y-2.5">
            <FieldCopyRow
              label="Full Name"
              value={dummyProfile.fullName}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
            <FieldCopyRow
              label="Date of Birth"
              value={dummyProfile.dob}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
            <FieldCopyRow
              label="Domicile State"
              value={dummyProfile.state}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
            <FieldCopyRow
              label="Category"
              value={dummyProfile.category}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
            <FieldCopyRow
              label="10th Roll Number"
              value={dummyProfile.tenthRoll}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
            <FieldCopyRow
              label="10th Percentage"
              value={dummyProfile.tenthMarks}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
            <FieldCopyRow
              label="12th Roll Number"
              value={dummyProfile.twelfthRoll}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
            <FieldCopyRow
              label="12th Percentage"
              value={dummyProfile.twelfthMarks}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
          </div>
        </div>

        {/* Required Documents Section */}
        <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-4">
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-[#7C3AED]" />
            <h3 className="text-sm font-bold text-white">Required Documents (Auto-Resized)</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => handleDownload('Passport Photo', '50KB')}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
            >
              <div className="text-left">
                <p className="text-xs font-bold text-white">Download 50KB Photo</p>
                <p className="text-[10px] text-emerald-400">Specification: 350x450 px</p>
              </div>
              <div className="p-2 rounded-lg bg-[#7C3AED]/20 text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                <Download className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => handleDownload('Signature', '20KB')}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
            >
              <div className="text-left">
                <p className="text-xs font-bold text-white">Download 20KB Signature</p>
                <p className="text-[10px] text-emerald-400">Specification: 200x80 px</p>
              </div>
              <div className="p-2 rounded-lg bg-[#7C3AED]/20 text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                <Download className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Massive Mark as Applied Button */}
        <div className="pt-2">
          {!isApplied ? (
            <button
              onClick={handleMarkApplied}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-base transition-all shadow-xl shadow-emerald-500/25 glow-primary flex items-center justify-center gap-3 active:scale-98"
            >
              <FileCheck2 className="w-6 h-6" />
              <span>MARK AS APPLIED</span>
            </button>
          ) : (
            <div className="w-full p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-center font-bold text-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>APPLICATION RECORDED AS APPLIED ✓</span>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

function FieldCopyRow({
  label,
  value,
  copiedField,
  onCopy,
}: {
  label: string
  value: string
  copiedField: string | null
  onCopy: (label: string, value: string) => void
}) {
  const isCopied = copiedField === label

  return (
    <div className="glass-card p-3 rounded-xl border border-white/10 flex items-center justify-between hover:bg-white/5 transition-colors">
      <div className="min-w-0 pr-2">
        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{label}</p>
        <p className="text-xs font-bold text-white truncate mt-0.5">{value}</p>
      </div>

      <button
        onClick={() => onCopy(label, value)}
        className={`p-2 rounded-lg transition-all flex items-center gap-1 text-xs font-semibold ${
          isCopied
            ? 'bg-emerald-500 text-white shadow-md'
            : 'bg-white/10 hover:bg-white/20 text-gray-200'
        }`}
        title={`Copy ${label}`}
      >
        {isCopied ? (
          <>
            <Check className="w-4 h-4 text-white" />
            <span className="text-[10px]">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span className="text-[10px]">Copy</span>
          </>
        )}
      </button>
    </div>
  )
}
