import { motion } from 'framer-motion'
import { Briefcase, Code2, Rocket, Users, TrendingUp, Award } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Разработчик',
    text: 'Пишет код каждый день — от бэкенда до фронта. Знает, как устроены реальные системы изнутри.',
  },
  {
    icon: Briefcase,
    title: 'Продуктовый опыт',
    text: 'Запускал продукты с нуля: от идеи и MVP до первых платящих пользователей.',
  },
  {
    icon: TrendingUp,
    title: 'Бизнес-мышление',
    text: 'Понимает, как код превращается в деньги. Монетизация, упаковка, маркетинг — не пустые слова.',
  },
  {
    icon: Users,
    title: 'Работа с командами',
    text: 'Руководил разработкой в проектах для крупных компаний. Умеет объяснять просто и по делу.',
  },
  {
    icon: Rocket,
    title: 'Вайб-кодинг в проде',
    text: 'Использует AI-инструменты в реальной работе с 2023 года. Знает их границы и возможности.',
  },
  {
    icon: Award,
    title: 'Ментор и преподаватель',
    text: 'Обучил десятки студентов. Фокус на результате: не просто «понял», а «сделал и запустил».',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
}

export default function InstructorBlock() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-violet-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Слева — текст про Антона */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-5">
              Преподаватель курса
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Антон —{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                разработчик, продуктолог и ментор
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Редкое сочетание: человек, который и код пишет, и продукт понимает, и умеет объяснить так, чтобы ты сразу пошёл делать.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200">
              <span className="text-amber-600 font-bold text-lg whitespace-nowrap">1&nbsp;час</span>
              <span className="text-gray-700 text-sm">— столько заняло создание этого сайта с нуля. Весь проект сделан вайб-кодингом.</span>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="mt-6 grid sm:grid-cols-2 gap-3"
            >
              {highlights.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  variants={item}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{title}</div>
                    <div className="text-gray-600 text-xs mt-0.5 leading-relaxed">{text}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Справа — фото Антона */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative max-w-lg w-full">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/anton.png"
                  alt="Антон — преподаватель курса"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Декоративные элементы */}
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-violet-300/20 rounded-full blur-2xl" />
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-amber-300/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
