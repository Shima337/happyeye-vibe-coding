import { motion } from 'framer-motion'

const YOUTUBE_EMBED_ID = 'gru6fykp050'

const highlights = [
  '✦ Работаем с МТС, Сбер, А100 и другими крупными компаниями',
  '✦ Показываем, как превратить код в работающий продукт',
  '✦ Учим не просто кодить, а зарабатывать на том, что создал',
]

export default function VideoBlock() {
  return (
    <section id="video" className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Video — на мобильных явная ширина и min-height, чтобы не схлопывалось */}
          <motion.div
            initial={{ opacity: 0, rotate: -2 }}
            whileInView={{ opacity: 1, rotate: -1 }}
            viewport={{ once: true, margin: '-60px' }}
            className="relative w-full max-w-sm mx-auto md:mx-0 hand-border overflow-hidden bg-[var(--color-paper-light)]"
            style={{
              boxShadow: '6px 6px 0 rgba(0,0,0,0.08)',
              aspectRatio: '9 / 16',
              minHeight: 'min(56.25vw, 340px)',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`}
              title="YouTube Shorts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
          >
            <span
              className="inline-block highlight-blue px-3 py-1 text-lg mb-4"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Не просто вайб-кодеры
            </span>

            <h2
              className="text-3xl md:text-4xl font-bold leading-snug"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Мы — разработчики,{' '}
              <span className="highlight">
                которые делают реальные продукты
              </span>
            </h2>

            <p
              className="mt-4 text-lg text-[var(--color-ink-light)] leading-relaxed"
              style={{ fontFamily: 'Neucha, cursive' }}
            >
              Вайб-кодинг сам по себе — ничто. Код, который не работает в проде,
              не приносит денег и лежит на гитхабе — это хобби. Мы учим делать
              проекты, которые можно показать, применить и монетизировать.
            </p>

            {/* Company badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {['МТС', 'Сбер', 'А100'].map((name) => (
                <span
                  key={name}
                  className="hand-border-thin px-4 py-1.5 text-sm font-medium"
                  style={{ fontFamily: 'Neucha, cursive' }}
                >
                  {name}
                </span>
              ))}
              <span
                className="px-4 py-1.5 text-sm text-[var(--color-ink-faded)]"
                style={{ fontFamily: 'Neucha, cursive' }}
              >
                и ещё 50+ проектов
              </span>
            </div>

            {/* Highlights */}
            <ul className="mt-5 space-y-2">
              {highlights.map((text) => (
                <li
                  key={text}
                  className="text-[var(--color-ink-light)]"
                  style={{ fontFamily: 'Neucha, cursive', fontSize: '1.05rem' }}
                >
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
