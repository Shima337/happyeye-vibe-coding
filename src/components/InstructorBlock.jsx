import { motion } from 'framer-motion'

const highlights = [
  { title: 'Разработчик', text: 'Пишет код каждый день — от бэкенда до фронта.' },
  { title: 'Продуктовый опыт', text: 'Запускал продукты с нуля: от идеи до первых платящих пользователей.' },
  { title: 'Бизнес-мышление', text: 'Понимает, как код превращается в деньги.' },
  { title: 'Работа с командами', text: 'Руководил разработкой в проектах для крупных компаний.' },
  { title: 'Вайб-кодинг в проде', text: 'Использует AI-инструменты в реальной работе с 2023 года.' },
  { title: 'Ментор', text: 'Обучил десятки студентов. Фокус — «сделал и запустил».' },
]

export default function InstructorBlock() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left — about Anton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <span
              className="inline-block highlight-pink px-3 py-1 text-lg mb-4"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Преподаватель курса
            </span>

            <h2
              className="text-3xl md:text-4xl font-bold leading-snug"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Антон —{' '}
              <span className="sketch-underline">
                разработчик, продуктолог и ментор
              </span>
            </h2>

            <p
              className="mt-4 text-lg text-[var(--color-ink-light)]"
              style={{ fontFamily: 'Neucha, cursive' }}
            >
              Редкое сочетание: человек, который и код пишет, и продукт понимает,
              и умеет объяснить так, чтобы ты сразу пошёл делать.
            </p>

            {/* Time badge */}
            <div className="mt-4 inline-block sticky-note" style={{ transform: 'rotate(-1deg)' }}>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                1 час
              </span>
              <span
                className="text-sm ml-2"
                style={{ fontFamily: 'Neucha, cursive' }}
              >
                — столько заняло создание этого сайта. Весь проект — вайб-кодинг.
              </span>
            </div>

            {/* Highlights grid */}
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {highlights.map(({ title, text }) => (
                <div
                  key={title}
                  className="hand-border-thin p-3 bg-[var(--color-paper-light)]"
                >
                  <div
                    className="font-bold text-sm"
                    style={{ fontFamily: 'Caveat, cursive', fontSize: '1.15rem' }}
                  >
                    ✦ {title}
                  </div>
                  <div
                    className="text-[var(--color-ink-light)] text-sm mt-0.5"
                    style={{ fontFamily: 'Neucha, cursive' }}
                  >
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, rotate: 2 }}
            whileInView={{ opacity: 1, rotate: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div
              className="relative max-w-lg w-full hand-border overflow-hidden bg-[var(--color-paper-light)]"
              style={{ boxShadow: '5px 5px 0 rgba(0,0,0,0.06)' }}
            >
              <img
                src="/anton.png"
                alt="Антон — преподаватель курса"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
