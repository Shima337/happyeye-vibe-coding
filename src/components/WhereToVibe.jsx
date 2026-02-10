import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const suitable = [
  'Лендинги и одностраничники',
  'MVP и прототипы',
  'Автоматизации и скрипты',
  'Чат-боты и интеграции',
  'Небольшие веб-приложения',
  'Инструменты для себя и клиентов',
]

const notSuitable = [
  'Банковский и платёжный софт',
  'Критичные системы (медицина, транспорт)',
  'Сложные алгоритмы и высоконагруженные системы',
  'Проекты с жёсткими требованиями к безопасности',
  'Легаси без документации',
]

export default function WhereToVibe() {
  return (
    <section id="where" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Где можно вайб-кодить, а где нельзя
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ключевое отличие курса — мы честно показываем границы инструмента
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-green-50 border-2 border-green-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center">
                <Check size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Подходит</h3>
            </div>
            <ul className="space-y-3">
              {suitable.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <Check size={20} className="text-green-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-red-50 border-2 border-red-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500 text-white flex items-center justify-center">
                <X size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Не подходит</h3>
            </div>
            <ul className="space-y-3">
              {notSuitable.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <X size={20} className="text-red-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
