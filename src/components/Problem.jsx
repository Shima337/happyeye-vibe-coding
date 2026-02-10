import { motion } from 'framer-motion'
import { AlertCircle, Layers, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: AlertCircle,
    title: 'Код не работает в проде',
    description: 'AI генерирует код, но без понимания архитектуры и границ ты получаешь хрупкие решения, которые ломаются при масштабировании.',
  },
  {
    icon: Layers,
    title: 'Нет целостной картины',
    description: 'Вайб-кодинг даёт куски кода, но не учит, как связать их в проект, задеплоить и поддерживать.',
  },
  {
    icon: TrendingDown,
    title: 'Нельзя зарабатывать',
    description: 'Без навыков монетизации, упаковки и маркетинга проекты остаются на уровне пет-проектов.',
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
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Problem() {
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
            Вайб-кодинг — мощный инструмент. Но без понимания, где он работает, а где нет, ты застрянешь
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Типичные проблемы тех, кто полагается только на AI
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {problems.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
