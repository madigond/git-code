'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, Route, Crown } from 'lucide-react'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Feed', href: '/feed', icon: Compass },
    { name: 'Journey', href: '/profile', icon: Route },
    { name: 'Pro', href: '/pro', icon: Crown },
  ]

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 max-w-md mx-auto px-4 pb-3 pt-2">
      <div className="glass-card rounded-2xl border border-white/15 bg-[#040506]/90 backdrop-blur-xl shadow-2xl flex items-center justify-around py-2 px-3">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 py-1.5 px-3 rounded-xl transition-all relative ${
                isActive
                  ? 'text-white font-bold scale-105'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {isActive && (
                <div className="absolute -top-2 w-8 h-1 bg-[#7C3AED] rounded-full shadow-lg glow-primary"></div>
              )}
              <div
                className={`p-1.5 rounded-xl transition-colors ${
                  isActive ? 'bg-[#7C3AED]/20 text-[#7C3AED]' : 'bg-transparent'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] leading-none">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
