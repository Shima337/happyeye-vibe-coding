import { motion } from 'framer-motion'
import { Quote, User } from 'lucide-react'

const testimonials = [
  {
    name: 'Ольга К.',
    quote: 'Наконец поняла, где AI реально помогает, а где только создаёт иллюзию. Сделала первый лендинг и получила заказ на доработку.',
    result: 'Первый платный заказ через 2 месяца',
  },
  {
    name: 'Игорь М.',
    quote: 'До курса вайб-кодил наугад. Теперь знаю структуру проекта, как деплоить и что говорить клиенту. Фриланс пошёл в гору.',
    result: 'Рост доходов на фрилансе',
  },
  {
    name: 'Анна В.',
    quote: 'Запустила MVP своего сервиса без найма разработчика. Курс дал и код, и понимание монетизации.',
    result: 'MVP запущен, первые пользователи',
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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Отзывы студентов
          </h2>
          <p className="mt-4 text-lg text-gray-600">
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
          {testimonials.map(({ name, quote, result }) => (
            <motion.div
              key={name}
              variants={item}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <Quote size={28} className="text-violet-300 mb-3" />
              <p className="text-gray-700 mb-4">«{quote}»</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <User size={20} className="text-gray-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{name}</div>
                  <div className="text-sm text-violet-600">{result}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
