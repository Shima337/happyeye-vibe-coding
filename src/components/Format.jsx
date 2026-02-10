import { motion } from 'framer-motion'

const formats = [
  {
    icon: '📹',
    title: 'Видеоуроки',
    description: 'Короткие уроки по модулям. Смотри в своём темпе, пересматривай сложные места.',
  },
  {
    icon: '💻',
    title: 'Практика на реальном проекте',
    description: 'Делаешь свой продукт от идеи до деплоя. Не абстрактные таски — то, что можно монетизировать.',
  },
  {
    icon: '🔍',
    title: 'Ревью кода',
    description: 'Разбор твоего кода от менторов: архитектура, стиль, что улучшить.',
  },
  {
    icon: '💬',
    title: 'Чат с менторами',
    description: 'Вопросы по курсу и проекту — в общем чате и в личке. Ответы в течение 24 часов.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Format() {
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
            Как проходит <span className="highlight-blue">обучение</span>
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Формат, который даёт результат, а не просто сертификат
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {formats.map(({ icon, title, description }, idx) => (
            <motion.div
              key={title}
              variants={item}
              className="paper-card p-5 text-center"
              style={{
                transform: `rotate(${idx % 2 === 0 ? -0.8 : 0.8}deg)`,
              }}
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                {title}
              </h3>
              <p
                className="mt-2 text-sm text-[var(--color-ink-light)]"
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
