import { motion } from 'framer-motion'

export default function FooterCTA({ onOpenSignup }) {
  return (
    <>
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            className="paper-card p-8 md:p-12 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Готов создавать проекты и{' '}
              <span className="highlight-strong">зарабатывать</span>?
            </h2>
            <p
              className="mt-4 text-lg text-[var(--color-ink-light)]"
              style={{ fontFamily: 'Neucha, cursive' }}
            >
              Запишись на курс и получи доступ к урокам и поддержке
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="hand-button-filled text-xl! px-8! py-3!"
                onClick={onOpenSignup}
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                Записаться на курс ✎
              </button>
              <a
                href="#"
                className="hand-button text-xl! px-8! py-3!"
                style={{ fontFamily: 'Caveat, cursive', textDecoration: 'none' }}
              >
                Написать в поддержку →
              </a>
            </div>

            {/* Decorative doodle */}
            <div className="mt-6 flex justify-center">
              <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 15 Q 20 5, 35 15 T 65 15 T 95 15 T 115 15"
                  stroke="var(--color-ink-faded)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t-2 border-[var(--color-ink)]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a
              href="https://happyai.one"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              HappyAI
            </a>
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {['Программа', 'Тарифы', 'FAQ', 'Контакты'].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors"
                  style={{ fontFamily: 'Neucha, cursive' }}
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="https://happyai.one"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-ink-faded)] hover:text-[var(--color-ink)] transition-colors"
              style={{ fontFamily: 'Neucha, cursive' }}
            >
              happyai.one
            </a>
          </div>
          <div
            className="mt-6 pt-6 border-t border-[var(--color-ink)]/10 text-center text-sm text-[var(--color-ink-faded)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://happyai.one"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-ink)] transition-colors"
            >
              HappyAI
            </a>
            . Курсы вайбкодинга.
          </div>
        </div>
      </footer>
    </>
  )
}
