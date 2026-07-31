'use client'

import { useState } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import {
  X,
  Heart,
  RotateCcw,
  Sparkles,
  Calendar,
  IndianRupee,
  MapPin,
  Briefcase,
  CheckCircle2,
  Zap,
  ArrowRight,
} from 'lucide-react'
import vacanciesData from '@/data/vacancies.json'
import BottomNav from '@/components/BottomNav'

interface Vacancy {
  id: string
  title: string
  department: string
  state: string
  fee: number
  deadline: string
  totalPosts: string
  category_eligible: string[]
  qualification: string
  ageLimit: string
  logo_url: string
  bgGradient: string
  badgeColor: string
}

export default function FeedPage() {
  const [cards, setCards] = useState<Vacancy[]>(vacanciesData)
  const [savedCount, setSavedCount] = useState(0)
  const [savedList, setSavedList] = useState<Vacancy[]>([])
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)

  const handleSwipe = (direction: 'left' | 'right', vacancy: Vacancy) => {
    if (direction === 'right') {
      setSavedCount((prev) => prev + 1)
      setSavedList((prev) => [...prev, vacancy])
    }
    setCards((prev) => prev.filter((c) => c.id !== vacancy.id))
  }

  const handleReset = () => {
    setCards(vacanciesData)
    setSavedCount(0)
    setSavedList([])
  }

  return (
    <div className="min-h-screen bg-[#040506] text-white max-w-md mx-auto pb-24 relative flex flex-col justify-between overflow-x-hidden">
      {/* Mobile Top Header */}
      <header className="p-4 flex items-center justify-between glass-card border-b border-white/10 sticky top-0 z-30 bg-[#040506]/90 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7C3AED] to-purple-400 flex items-center justify-center font-extrabold text-xs shadow-md glow-primary">
            FK
          </div>
          <div>
            <h1 className="text-base font-extrabold tracking-tight">
              Govt Vacancy <span className="text-[#7C3AED]">Feed</span>
            </h1>
            <p className="text-[10px] text-gray-400">Swipe Right to Save & Auto-Fill</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#7C3AED]/15 px-2.5 py-1 rounded-full border border-[#7C3AED]/30 text-[#7C3AED] text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{savedCount} Saved</span>
        </div>
      </header>

      {/* Main Tinder Card Container */}
      <div className="px-4 py-6 flex-1 flex flex-col justify-center items-center relative">
        <AnimatePresence>
          {cards.length > 0 ? (
            <div className="w-full h-[470px] relative flex items-center justify-center">
              {cards.map((vacancy, index) => {
                const isTop = index === cards.length - 1
                return (
                  <SwipeCard
                    key={vacancy.id}
                    vacancy={vacancy}
                    isTop={isTop}
                    onSwipe={(dir) => handleSwipe(dir, vacancy)}
                  />
                )
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full glass-card p-8 rounded-3xl border border-white/15 text-center space-y-5 my-auto"
            >
              <div className="w-16 h-16 rounded-full bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30 flex items-center justify-center mx-auto glow-primary">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white">All Vacancies Reviewed!</h2>
                <p className="text-xs text-gray-400 mt-1">
                  You saved <span className="text-[#7C3AED] font-bold">{savedCount} vacancies</span> for 1-Click Auto Fill.
                </p>
              </div>

              {savedList.length > 0 && (
                <div className="text-left space-y-2 pt-2 border-t border-white/10">
                  <p className="text-[11px] font-bold text-gray-300">Saved Applications:</p>
                  {savedList.map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs"
                    >
                      <span className="font-semibold text-white truncate max-w-[200px]">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">₹{item.fee}</span>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={handleReset}
                className="w-full py-3 px-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold rounded-xl transition-all shadow-lg glow-primary flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restart Swipe Stack</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Swipe Action Controls */}
        {cards.length > 0 && (
          <div className="w-full flex items-center justify-around mt-6 px-4">
            {/* Skip Button */}
            <button
              onClick={() => handleSwipe('left', cards[cards.length - 1])}
              className="w-14 h-14 rounded-full glass-card border border-rose-500/30 text-rose-400 flex items-center justify-center hover:bg-rose-500/20 hover:scale-110 active:scale-95 transition-all shadow-lg"
              title="Skip"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Reload Button */}
            <button
              onClick={handleReset}
              className="w-10 h-10 rounded-full glass-card border border-white/20 text-gray-400 flex items-center justify-center hover:bg-white/10 active:rotate-180 transition-all"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Save Button */}
            <button
              onClick={() => handleSwipe('right', cards[cards.length - 1])}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/30 glow-primary"
              title="Save & Apply"
            >
              <Heart className="w-6 h-6 fill-current" />
            </button>
          </div>
        )}
      </div>

      {/* Fixed Mobile Navigation Bar */}
      <BottomNav />
    </div>
  )
}

/* Tinder Card Component */
function SwipeCard({
  vacancy,
  isTop,
  onSwipe,
}: {
  vacancy: Vacancy
  isTop: boolean
  onSwipe: (dir: 'left' | 'right') => void
}) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-15, 15])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

  // Glow badges opacity
  const rightBadgeOpacity = useTransform(x, [10, 100], [0, 1])
  const leftBadgeOpacity = useTransform(x, [-10, -100], [0, 1])

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 100) {
      onSwipe('right')
    } else if (info.offset.x < -100) {
      onSwipe('left')
    }
  }

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity,
        zIndex: isTop ? 10 : 1,
      }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ x: x.get() < 0 ? -300 : 300, opacity: 0, transition: { duration: 0.2 } }}
      className={`absolute inset-0 w-full h-full rounded-3xl glass-card border border-white/20 overflow-hidden shadow-2xl flex flex-col justify-between select-none cursor-grab active:cursor-grabbing bg-gradient-to-b ${vacancy.bgGradient}`}
    >
      {/* Top Overlay Badges during Drag */}
      {isTop && (
        <>
          <motion.div
            style={{ opacity: rightBadgeOpacity }}
            className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-xl bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider border border-white/20 shadow-lg glow-primary -rotate-12"
          >
            ✓ INTERESTED
          </motion.div>
          <motion.div
            style={{ opacity: leftBadgeOpacity }}
            className="absolute top-6 right-6 z-20 px-4 py-1.5 rounded-xl bg-rose-600 text-white font-extrabold text-xs uppercase tracking-wider border border-white/20 shadow-lg rotate-12"
          >
            ✕ SKIP
          </motion.div>
        </>
      )}

      {/* Top Banner & Header */}
      <div className="p-6 space-y-3 relative">
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${vacancy.badgeColor}`}>
            {vacancy.state}
          </span>
          <span className="text-[11px] font-bold text-gray-300 bg-white/10 px-2.5 py-1 rounded-full">
            {vacancy.totalPosts}
          </span>
        </div>

        <h2 className="text-xl font-extrabold text-white leading-snug">{vacancy.title}</h2>
        <p className="text-xs text-gray-300 font-medium">{vacancy.department}</p>
      </div>

      {/* Card Body & Specs Grid */}
      <div className="p-6 space-y-4 bg-black/40 backdrop-blur-md border-t border-white/10 mt-auto">
        <div className="grid grid-cols-2 gap-3">
          {/* Fee */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
              <IndianRupee className="w-3.5 h-3.5 text-emerald-400" />
              <span>Application Fee</span>
            </div>
            <p className="text-base font-extrabold text-emerald-400">₹{vacancy.fee}</p>
          </div>

          {/* Deadline */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Apply Deadline</span>
            </div>
            <p className="text-xs font-bold text-amber-300">{vacancy.deadline}</p>
          </div>
        </div>

        {/* Qualification & Categories */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between text-gray-300">
            <span className="text-gray-400">Qualification:</span>
            <span className="font-semibold text-white">{vacancy.qualification}</span>
          </div>
          <div className="flex items-center justify-between text-gray-300">
            <span className="text-gray-400">Age Limit:</span>
            <span className="font-semibold text-white">{vacancy.ageLimit}</span>
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1">
            {vacancy.category_eligible.map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-gray-300 font-mono"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Swipe Instruction */}
        <div className="text-center pt-1 text-[10px] text-gray-400 tracking-wider uppercase font-bold flex items-center justify-center gap-1">
          <span>👈 Swipe Left to Skip</span>
          <span>•</span>
          <span className="text-emerald-400">Swipe Right to Save 👉</span>
        </div>
      </div>
    </motion.div>
  )
}
