import { motion } from 'framer-motion'

export default function Hero({ onOpenSignup }) {
  return (
    <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main paper card — like the reference image */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="paper-card p-8 md:p-14 max-w-2xl mx-auto text-center"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            Курс по{' '}
            <span className="highlight-strong">вайбкодингу</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-xl md:text-2xl text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            от практиков
          </motion.p>

          {/* Tools list with hand-drawn icon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            {/* Hand-drawn Cursor logo */}
            <div className="mb-2">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="24" stroke="var(--color-ink)" strokeWidth="2.5" fill="none" strokeLinecap="round"
                  strokeDasharray="2 0" style={{ filter: 'url(#sketchy)' }} />
                <text x="28" y="32" textAnchor="middle" fill="var(--color-ink)"
                  style={{ fontFamily: 'Caveat, cursive', fontSize: '14px', fontWeight: 600 }}>
                  cursor
                </text>
                <defs>
                  <filter id="sketchy">
                    <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                  </filter>
                </defs>
              </svg>
            </div>

            {['Cursor', 'Claude Code', 'CodeX'].map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="text-2xl md:text-3xl"
                style={{ fontFamily: 'Caveat, cursive', fontWeight: 500 }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10"
          >
            <button
              type="button"
              className="hand-button-filled text-xl! md:text-2xl! px-8! py-3!"
              onClick={onOpenSignup}
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Оставляйте заявку ↗
            </button>
          </motion.div>
        </motion.div>

        {/* Subtitle card below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-8 max-w-xl mx-auto text-center"
        >
          <p
            className="text-lg md:text-xl text-[var(--color-ink-light)] leading-relaxed"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Мы — разработчики, которые используют вайб-кодинг в работе.
            Покажем, где он уместен, как делать реальные проекты,
            выкладывать и рекламировать их.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
