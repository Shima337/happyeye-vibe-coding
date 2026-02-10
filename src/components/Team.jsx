import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const team = [
  {
    name: 'Алексей Иванов',
    role: 'Ведущий разработчик',
    experience: '8+ лет в веб-разработке, вайб-кодинг в продакшене с 2023',
  },
  {
    name: 'Мария Петрова',
    role: 'Fullstack-разработчик',
    experience: '5+ лет, запуск MVP и продуктовых команд',
  },
  {
    name: 'Дмитрий Сидоров',
    role: 'Архитектор и ментор',
    experience: '10+ лет, консультации по архитектуре и масштабированию',
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

export default function Team() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Преподаватели
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Практикующие разработчики HappyAI — не теоретики, а те, кто каждый день пишет код и использует AI
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map(({ name, role, experience }) => (
            <motion.div
              key={name}
              variants={item}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-2xl bg-gray-200 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <User size={40} className="text-gray-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              <p className="text-violet-600 font-medium mt-1">{role}</p>
              <p className="mt-2 text-sm text-gray-600">{experience}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
