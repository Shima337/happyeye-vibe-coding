import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'О курсе', href: '#program' },
  { label: 'Для кого', href: '#audience' },
  { label: 'Инструменты', href: '#where' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header({ onOpenSignup }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleOpenSignup = () => {
    if (onOpenSignup) {
      onOpenSignup()
    }
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-paper)]/95 backdrop-blur-sm border-b-2 border-[var(--color-ink)]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="https://happyai.one"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[var(--font-hand)] text-2xl font-bold text-[var(--color-ink)] hover:text-[var(--color-pen-blue)] transition-colors"
          style={{ fontFamily: 'Caveat, cursive' }}
        >
          HappyAI
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors"
              style={{ fontFamily: 'Neucha, cursive', fontSize: '1.1rem' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            type="button"
            className="hand-button text-base! px-5! py-2!"
            onClick={handleOpenSignup}
            style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}
          >
            Записаться ✎
          </button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-[var(--color-ink)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
          style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-[var(--color-ink)]/10 bg-[var(--color-paper)]"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 text-[var(--color-ink-light)] hover:text-[var(--color-ink)]"
                  style={{ fontFamily: 'Neucha, cursive', fontSize: '1.2rem' }}
                  onClick={() => setMobileOpen(false)}
                >
                  — {link.label}
                </a>
              ))}
              <button
                type="button"
                className="mt-3 hand-button-filled text-base!"
                onClick={handleOpenSignup}
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                Записаться ✎
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
