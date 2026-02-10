import { motion } from 'framer-motion'

const results = [
  { text: 'Реальный проект от идеи до деплоя' },
  { text: 'Навыки: где вайб-кодить, а где писать самому' },
  { text: 'Понимание границ AI и архитектуры' },
  { text: 'Идеи монетизации и упаковки продукта' },
  { text: 'Деплой и запуск в прод' },
  { text: 'Базовый маркетинг и продвижение' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
}

export default function Results() {
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
            Что ты <span className="highlight-green">получишь</span>
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Не только кодинг — полный цикл от идеи до заработка
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {results.map(({ text }, idx) => (
            <motion.div
              key={text}
              variants={item}
              className="flex items-center gap-3 p-3 hand-border-thin bg-[var(--color-paper-light)]"
            >
              <span className="num-circle">{idx + 1}</span>
              <span
                className="font-medium"
                style={{ fontFamily: 'Neucha, cursive', fontSize: '1.05rem' }}
              >
                {text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
