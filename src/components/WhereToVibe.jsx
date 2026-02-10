import { motion } from 'framer-motion'

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
    <section id="where" className="py-12 md:py-20">
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
            Где можно <span className="highlight-green">вайб-кодить</span>,{' '}
            а где <span className="highlight-pink">нельзя</span>
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Ключевое отличие курса — мы честно показываем границы инструмента
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Suitable */}
          <div
            className="hand-border-green p-6 md:p-8 bg-[#f0fdf4]"
          >
            <h3
              className="text-2xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              ✓ Подходит
            </h3>
            <ul className="space-y-3">
              {suitable.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-[var(--color-ink-light)]"
                  style={{ fontFamily: 'Neucha, cursive', fontSize: '1.05rem' }}
                >
                  <span className="text-[var(--color-pen-green)] font-bold text-lg shrink-0">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not suitable */}
          <div
            className="hand-border-red p-6 md:p-8 bg-[#fef2f2]"
          >
            <h3
              className="text-2xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              ✗ Не подходит
            </h3>
            <ul className="space-y-3">
              {notSuitable.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-[var(--color-ink-light)]"
                  style={{ fontFamily: 'Neucha, cursive', fontSize: '1.05rem' }}
                >
                  <span className="text-[var(--color-pen-red)] font-bold text-lg shrink-0">✗</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
