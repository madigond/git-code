'use client'

import { useState } from 'react'
import {
  User,
  GraduationCap,
  Upload,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Camera,
  FileSignature,
  FileCheck,
  ShieldCheck,
  Zap,
} from 'lucide-react'

export default function ProfilePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [saved, setSaved] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    name: 'Rahul Sharma',
    dob: '2001-05-15',
    state: 'Uttar Pradesh',
    category: 'OBC',
    tenthRoll: 'UP10-2017-849201',
    tenthMarks: '86.4%',
    twelfthRoll: 'UP12-2019-920412',
    twelfthMarks: '84.2%',
    photoName: 'rahul_photo_passport.jpg',
    photoSize: '45 KB (350x450 px)',
    photoUploaded: true,
    sigName: 'rahul_signature.png',
    sigSize: '18 KB (200x80 px)',
    sigUploaded: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 4000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
      {/* Header Banner */}
      <div className="mb-8 glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#7C3AED]/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30 rounded-full">
                Master Profile
              </span>
              <span className="text-xs text-gray-400">UP & Bihar Exam Sync Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Candidate Master Dossier
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Fill once, automatically apply to SSC, UPPSC, BPSC & State Govt Vacancies.
            </p>
          </div>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl text-sm font-semibold transition-all shadow-lg glow-primary active:scale-95"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Save Profile</span>
          </button>
        </div>

        {saved && (
          <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Master Profile updated and encrypted successfully! Ready for 1-Click application.</span>
          </div>
        )}
      </div>

      {/* Step Indicator Progress Bar */}
      <div className="mb-8 glass-card p-4 rounded-2xl border border-white/10">
        <div className="grid grid-cols-3 gap-2">
          {/* Step 1 */}
          <button
            onClick={() => setCurrentStep(1)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              currentStep === 1
                ? 'bg-[#7C3AED]/20 border border-[#7C3AED]/50 text-white'
                : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                currentStep === 1
                  ? 'bg-[#7C3AED] text-white shadow-md'
                  : 'bg-white/10 text-gray-400'
              }`}
            >
              1
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold leading-tight">Personal Details</p>
              <p className="text-[10px] text-gray-400">Name, DOB, State</p>
            </div>
          </button>

          {/* Step 2 */}
          <button
            onClick={() => setCurrentStep(2)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              currentStep === 2
                ? 'bg-[#7C3AED]/20 border border-[#7C3AED]/50 text-white'
                : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                currentStep === 2
                  ? 'bg-[#7C3AED] text-white shadow-md'
                  : 'bg-white/10 text-gray-400'
              }`}
            >
              2
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold leading-tight">Education</p>
              <p className="text-[10px] text-gray-400">10th & 12th Marks</p>
            </div>
          </button>

          {/* Step 3 */}
          <button
            onClick={() => setCurrentStep(3)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              currentStep === 3
                ? 'bg-[#7C3AED]/20 border border-[#7C3AED]/50 text-white'
                : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                currentStep === 3
                  ? 'bg-[#7C3AED] text-white shadow-md'
                  : 'bg-white/10 text-gray-400'
              }`}
            >
              3
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold leading-tight">Documents</p>
              <p className="text-[10px] text-gray-400">Photo & Signature</p>
            </div>
          </button>
        </div>
      </div>

      {/* Main Glassmorphic Form Body */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative">
        {/* STEP 1: Personal Details */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED]/20">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Step 1: Personal Details</h2>
                <p className="text-xs text-gray-400">Provide basic demographic info as per Aadhaar/Class 10 certificate.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Full Name (As per 10th Certificate)</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>

              {/* DOB */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>

              {/* State Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Domicile State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm bg-[#0A0C10]"
                >
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm bg-[#0A0C10]"
                >
                  <option value="General">General / Unreserved (UR)</option>
                  <option value="OBC">Other Backward Class (OBC)</option>
                  <option value="SC">Scheduled Caste (SC)</option>
                  <option value="ST">Scheduled Tribe (ST)</option>
                  <option value="EWS">Economically Weaker Section (EWS)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Educational Details */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED]/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Step 2: Educational Details</h2>
                <p className="text-xs text-gray-400">Class 10th and 12th Roll numbers and Percentage marks.</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* 10th Info */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-purple-300">Class 10th (Matriculation)</h3>
                  <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                    Verified
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400">10th Roll Number / Code</label>
                    <input
                      type="text"
                      name="tenthRoll"
                      value={formData.tenthRoll}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400">10th Percentage / CGPA</label>
                    <input
                      type="text"
                      name="tenthMarks"
                      value={formData.tenthMarks}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* 12th Info */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-purple-300">Class 12th (Intermediate)</h3>
                  <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                    Verified
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400">12th Roll Number</label>
                    <input
                      type="text"
                      name="twelfthRoll"
                      value={formData.twelfthRoll}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400">12th Percentage / CGPA</label>
                    <input
                      type="text"
                      name="twelfthMarks"
                      value={formData.twelfthMarks}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Photo & Signature Upload UI */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED]/20">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Step 3: Document Vault & Auto-Resizer</h2>
                  <p className="text-xs text-gray-400">Passport photo and signature formatted to official exam specifications.</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
                <Zap className="w-3.5 h-3.5" />
                <span>Auto Resizer Engine Ready</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Photo Upload Card */}
              <div className="glass-card p-5 rounded-xl border border-white/10 space-y-4 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-[#7C3AED]" />
                    <h3 className="text-sm font-bold text-white">Passport Photo</h3>
                  </div>
                  <span className="text-[10px] text-gray-400">Spec: 20-50 KB</span>
                </div>

                {/* Dummy Upload Container */}
                <div className="border-2 border-dashed border-white/20 rounded-xl p-4 text-center hover:border-[#7C3AED]/60 transition-colors bg-white/5 relative">
                  <div className="w-24 h-28 mx-auto bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg flex flex-col items-center justify-center border border-white/10 mb-3 shadow-inner relative overflow-hidden">
                    <User className="w-12 h-12 text-gray-400" />
                    <div className="absolute bottom-0 inset-x-0 bg-emerald-500/80 text-[9px] font-bold text-white py-0.5">
                      AUTO-RESIZED
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-white truncate max-w-[200px] mx-auto">
                    {formData.photoName}
                  </p>
                  <p className="text-[11px] text-emerald-400 font-mono mt-0.5">
                    ✓ {formData.photoSize}
                  </p>

                  <label className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium cursor-pointer transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload New Photo</span>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>

              {/* Signature Upload Card */}
              <div className="glass-card p-5 rounded-xl border border-white/10 space-y-4 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileSignature className="w-4 h-4 text-[#7C3AED]" />
                    <h3 className="text-sm font-bold text-white">Digital Signature</h3>
                  </div>
                  <span className="text-[10px] text-gray-400">Spec: 10-20 KB</span>
                </div>

                {/* Dummy Upload Container */}
                <div className="border-2 border-dashed border-white/20 rounded-xl p-4 text-center hover:border-[#7C3AED]/60 transition-colors bg-white/5 relative">
                  <div className="w-36 h-16 mx-auto bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-white/10 mb-3 shadow-inner relative overflow-hidden">
                    <span className="font-serif italic text-lg text-gray-300 font-semibold tracking-wider">
                      Rahul Sharma
                    </span>
                    <div className="absolute bottom-0 inset-x-0 bg-emerald-500/80 text-[9px] font-bold text-white py-0.5">
                      AUTO-RESIZED
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-white truncate max-w-[200px] mx-auto">
                    {formData.sigName}
                  </p>
                  <p className="text-[11px] text-emerald-400 font-mono mt-0.5">
                    ✓ {formData.sigSize}
                  </p>

                  <label className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium cursor-pointer transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Signature</span>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-3">
            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold transition-all shadow-md glow-primary"
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-all shadow-lg glow-primary"
              >
                <FileCheck className="w-4 h-4" />
                <span>Complete Profile</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
