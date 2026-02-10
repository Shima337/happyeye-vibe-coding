import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const modules = [
  {
    title: 'Модуль 1: Основы вайб-кодинга и выбор инструментов',
    content: 'Что такое вайб-кодинг, Cursor vs другие IDE, настройка окружения. Как ставить задачи AI и проверять результат.',
  },
  {
    title: 'Модуль 2: Промпт-инжиниринг для кода',
    content: 'Как формулировать запросы, разбивать задачу на шаги, давать контекст. Типичные ошибки и как их избегать.',
  },
  {
    title: 'Модуль 3: Архитектура проекта с AI',
    content: 'Структура папок, разделение ответственности, когда писать самому, когда доверять AI. Рефакторинг и поддержка.',
  },
  {
    title: 'Модуль 4: Создание реального продукта',
    content: 'От идеи к MVP: выбор стека, итерации, тестирование. Реальный проект от нуля до рабочей версии.',
  },
  {
    title: 'Модуль 5: Деплой и запуск',
    content: 'Хостинг, домен, CI/CD по минимуму. Vercel, Railway, облака. Как выложить проект так, чтобы им пользовались.',
  },
  {
    title: 'Модуль 6: Монетизация и маркетинг',
    content: 'Модели монетизации: подписка, разовые платежи, фриланс. Упаковка продукта, лендинг, базовая реклама.',
  },
  {
    title: 'Модуль 7: Масштабирование и поддержка',
    content: 'Как развивать проект после запуска. Поддержка кода, обновления, обратная связь от пользователей.',
  },
]

export default function Program() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="program" className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            Программа <span className="highlight">курса</span>
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            7 модулей — от основ до монетизации
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-3"
        >
          {modules.map((module, index) => (
            <div
              key={index}
              className={`hand-border-thin bg-[var(--color-paper-light)] overflow-hidden transition-colors ${
                openIndex === index ? 'bg-[var(--color-highlight)]/15!' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-[var(--color-highlight)]/10 transition-colors"
              >
                <span
                  className="pr-4 font-bold"
                  style={{ fontFamily: 'Caveat, cursive', fontSize: '1.25rem' }}
                >
                  {module.title}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  className="shrink-0 text-[var(--color-ink)] text-xl"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-[var(--color-ink)]/10"
                  >
                    <p
                      className="p-4 md:p-5 pt-3 text-[var(--color-ink-light)]"
                      style={{ fontFamily: 'Neucha, cursive' }}
                    >
                      {module.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
