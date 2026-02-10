import { motion } from 'framer-motion'

const team = [
  {
    name: 'Алексей Иванов',
    role: 'Ведущий разработчик',
    experience: '8+ лет в веб-разработке, вайб-кодинг в продакшене с 2023',
  },
  {
    name: 'Мария Петрова',
    role: 'Fullstack-разработчик',
    experience: '5+ лет, запуск MVP и продуктовых команд',
  },
  {
    name: 'Дмитрий Сидоров',
    role: 'Архитектор и ментор',
    experience: '10+ лет, консультации по архитектуре и масштабированию',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Team() {
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
            <span className="highlight">Преподаватели</span>
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Практикующие разработчики — не теоретики, а те, кто каждый день пишет код и использует AI
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {team.map(({ name, role, experience }, idx) => (
            <motion.div
              key={name}
              variants={item}
              className="paper-card p-6 text-center"
              style={{ transform: `rotate(${idx === 0 ? -1 : idx === 2 ? 1 : 0}deg)` }}
            >
              {/* Hand-drawn avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 hand-border flex items-center justify-center bg-[var(--color-paper)]">
                <span
                  className="text-3xl"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  {name.charAt(0)}
                </span>
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                {name}
              </h3>
              <p
                className="text-[var(--color-pen-blue)] font-medium mt-1"
                style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem' }}
              >
                {role}
              </p>
              <p
                className="mt-2 text-sm text-[var(--color-ink-light)]"
                style={{ fontFamily: 'Neucha, cursive' }}
              >
                {experience}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
