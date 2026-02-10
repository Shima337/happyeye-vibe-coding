import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ольга К.',
    quote: 'Наконец поняла, где AI реально помогает, а где только создаёт иллюзию. Сделала первый лендинг и получила заказ на доработку.',
    result: 'Первый платный заказ через 2 месяца',
    noteStyle: 'sticky-note',
  },
  {
    name: 'Игорь М.',
    quote: 'До курса вайб-кодил наугад. Теперь знаю структуру проекта, как деплоить и что говорить клиенту. Фриланс пошёл в гору.',
    result: 'Рост доходов на фрилансе',
    noteStyle: 'sticky-note-pink',
  },
  {
    name: 'Анна В.',
    quote: 'Запустила MVP своего сервиса без найма разработчика. Курс дал и код, и понимание монетизации.',
    result: 'MVP запущен, первые пользователи',
    noteStyle: 'sticky-note-blue',
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

export default function Testimonials() {
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
            Отзывы <span className="highlight">студентов</span>
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Реальные истории тех, кто прошёл курс
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map(({ name, quote, result, noteStyle }, idx) => (
            <motion.div
              key={name}
              variants={item}
              className={`${noteStyle} p-5 relative`}
              style={{ transform: `rotate(${idx === 0 ? -1.5 : idx === 2 ? 1.5 : 0.5}deg)` }}
            >
              <div className="tape" />
              <p
                className="text-[var(--color-ink)] leading-relaxed mb-4 pt-2"
                style={{ fontFamily: 'Neucha, cursive' }}
              >
                «{quote}»
              </p>
              <div className="border-t border-[var(--color-ink)]/10 pt-3">
                <div
                  className="font-bold"
                  style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}
                >
                  — {name}
                </div>
                <div
                  className="text-sm text-[var(--color-pen-blue)]"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  {result}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
