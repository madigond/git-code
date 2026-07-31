import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormKaro | Automated Government Form Filling Platform',
  description: 'AI-Powered Auto Form Filler, Resizer & One-Click Application Portal for Indian Government Exams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#040506] text-gray-100 selection:bg-[#7C3AED] selection:text-white relative">
        {/* Background Radial Glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl"></div>
        </div>

        {/* Global Navigation Header */}
        <header className="sticky top-0 z-50 glass-card border-b border-white/10 bg-[#040506]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-purple-400 flex items-center justify-center font-bold text-white shadow-lg glow-primary">
                FK
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Form<span className="text-[#7C3AED]">Karo</span>
              </span>
            </a>

            <nav className="flex items-center gap-4">
              <a
                href="/vacancies"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Vacancies
              </a>
              <a
                href="/profile"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Profile
              </a>
              <a
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-lg transition-all shadow-md hover:shadow-purple-500/20"
              >
                Sign In
              </a>
            </nav>
          </div>
        </header>

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}
