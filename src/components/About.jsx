import { motion } from 'framer-motion'

const stats = [
  { value: '5+', label: 'лет на рынке разработки' },
  { value: '50+', label: 'реализованных проектов' },
  { value: '200+', label: 'выпускников курсов' },
  { value: '100%', label: 'практики, не теория' },
]

export default function About() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            О компании <span className="highlight">HappyAI</span>
          </h2>
          <p
            className="mt-4 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Мы — разработчики, которые используют вайб-кодинг в реальных проектах.
            Не инфоцыгане, а практики: показываем, как делать продукты и зарабатывать на них.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map(({ value, label }, idx) => (
            <div
              key={label}
              className="paper-card p-5 text-center"
              style={{ transform: `rotate(${idx % 2 === 0 ? -1 : 1}deg)` }}
            >
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                {value}
              </div>
              <div
                className="text-sm text-[var(--color-ink-light)] mt-1"
                style={{ fontFamily: 'Neucha, cursive' }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
