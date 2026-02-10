import { motion } from 'framer-motion'
import { FolderOpen, Wrench, Lightbulb, Wallet, Upload, Megaphone } from 'lucide-react'

const results = [
  { icon: FolderOpen, text: 'Реальный проект от идеи до деплоя' },
  { icon: Wrench, text: 'Навыки: где вайб-кодить, а где писать самому' },
  { icon: Lightbulb, text: 'Понимание границ AI и архитектуры' },
  { icon: Wallet, text: 'Идеи монетизации и упаковки продукта' },
  { icon: Upload, text: 'Деплой и запуск в прод' },
  { icon: Megaphone, text: 'Базовый маркетинг и продвижение' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
}

export default function Results() {
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
            Что ты получишь
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Не только кодинг — полный цикл от идеи до заработка
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {results.map(({ icon: Icon, text }) => (
            <motion.div
              key={text}
              variants={item}
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Icon size={20} />
              </div>
              <span className="font-medium text-gray-800">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
