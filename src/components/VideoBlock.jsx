import { motion } from 'framer-motion'
import { Building2, Rocket, CircleDollarSign } from 'lucide-react'

const YOUTUBE_EMBED_ID = 'gru6fykp050'

const highlights = [
  {
    icon: Building2,
    text: 'Работаем с МТС, Сбер, А100 и другими крупными компаниями',
  },
  {
    icon: Rocket,
    text: 'Показываем, как превратить код в работающий продукт',
  },
  {
    icon: CircleDollarSign,
    text: 'Учим не просто кодить, а зарабатывать на том, что создал',
  },
]

export default function VideoBlock() {
  return (
    <section id="video" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Слева — видео */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="w-full min-w-0 flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-sm aspect-[9/16] min-h-[280px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-900">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`}
                title="YouTube Shorts"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

          {/* Справа — контент */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-5">
              Не просто вайб-кодеры
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Мы — разработчики, <br className="hidden sm:block" />которые{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                делают реальные продукты
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Вайб-кодинг сам по себе — ничто. Код, который не работает в проде, не приносит денег и лежит на гитхабе — это хобби. Мы учим делать проекты, которые можно показать, применить и монетизировать.
            </p>

            {/* Логотипы / бейджи компаний */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['МТС', 'Сбер', 'А100'].map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold text-sm border border-gray-200"
                >
                  {name}
                </span>
              ))}
              <span className="px-4 py-2 rounded-lg bg-gray-50 text-gray-400 text-sm border border-gray-100">
                и ещё 50+ проектов
              </span>
            </div>

            {/* Три пункта */}
            <ul className="mt-6 space-y-3">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
