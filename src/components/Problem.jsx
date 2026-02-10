import { motion } from 'framer-motion'

const problems = [
  {
    emoji: '⚠',
    title: 'Код не работает в проде',
    description: 'AI генерирует код, но без понимания архитектуры ты получаешь хрупкие решения, которые ломаются при масштабировании.',
    noteStyle: 'sticky-note',
  },
  {
    emoji: '🧩',
    title: 'Нет целостной картины',
    description: 'Вайб-кодинг даёт куски кода, но не учит, как связать их в проект, задеплоить и поддерживать.',
    noteStyle: 'sticky-note-pink',
  },
  {
    emoji: '💸',
    title: 'Нельзя зарабатывать',
    description: 'Без навыков монетизации и маркетинга проекты остаются на уровне пет-проектов.',
    noteStyle: 'sticky-note-blue',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24, rotate: 0 },
  show: { opacity: 1, y: 0 },
}

export default function Problem() {
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
            Вайб-кодинг — мощный инструмент.{' '}
            <span className="highlight-pink">Но без понимания</span> где он работает, ты застрянешь
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Типичные проблемы тех, кто полагается только на AI:
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {problems.map(({ emoji, title, description, noteStyle }, idx) => (
            <motion.div
              key={title}
              variants={item}
              className={`${noteStyle} p-5`}
              style={{ transform: `rotate(${idx % 2 === 0 ? -1.5 : 1.5}deg)` }}
            >
              <div
                className="text-2xl mb-2"
                style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}
              >
                {emoji} {title}
              </div>
              <p
                className="text-[var(--color-ink-light)]"
                style={{ fontFamily: 'Neucha, cursive' }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
