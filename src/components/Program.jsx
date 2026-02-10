import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

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
    <section id="program" className="py-20 md:py-28 bg-gradient-to-b from-violet-50/50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Программа курса
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            7 модулей — от основ до монетизации
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-2"
        >
          {modules.map((module, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span className="pr-4">{module.title}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="shrink-0 text-violet-600"
                >
                  <ChevronDown size={22} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-gray-100"
                  >
                    <p className="p-4 md:p-5 pt-3 text-gray-600">
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
