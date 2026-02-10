import { motion } from 'framer-motion'
import { Code2, Sparkles } from 'lucide-react'

export default function Hero({ onOpenSignup }) {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-white to-amber-50/50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6"
            >
              <Sparkles size={18} />
              Курсы от разработчиков
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Научись вайб-кодить и{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                зарабатывать
              </span>{' '}
              на своих проектах
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
            >
              Мы — разработчики, которые используют вайб-кодинг в работе. Покажем, где он уместен, как делать реальные проекты, выкладывать и рекламировать их.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                type="button"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-500/30 transition-all"
                onClick={onOpenSignup}
              >
                Начать обучение
              </button>
              <a
                href="#program"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-violet-300 hover:text-violet-700 transition-all"
              >
                Смотреть программу
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 p-8 shadow-xl border border-white/50">
              <div className="flex items-center gap-2 text-violet-700 font-mono text-sm mb-4">
                <Code2 size={20} />
                <span>vibe-coding.js</span>
              </div>
              <pre className="text-gray-700 font-mono text-xs leading-relaxed overflow-hidden">
{`// Где вайб-кодинг работает
const projects = [
  'Лендинги и MVP',
  'Автоматизации',
  'Боты и интеграции'
];

// Где не стоит
const avoid = [
  'Критичные системы',
  'Сложная архитектура'
];

// Результат: реальный продукт
return ship(project);`}
              </pre>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-amber-400/30 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
