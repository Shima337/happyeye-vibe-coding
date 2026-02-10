import { motion } from 'framer-motion'

const audiences = [
  {
    icon: '🎓',
    title: 'Новички',
    description: 'Хочешь войти в разработку без лет учёбы — вайб-кодинг плюс правильный подход дадут первый рабочий проект.',
  },
  {
    icon: '💼',
    title: 'Фрилансеры',
    description: 'Нужно быстрее делать заказы — научишься собирать проекты с AI и сдавать клиентам.',
  },
  {
    icon: '🚀',
    title: 'Предприниматели',
    description: 'Есть идея продукта — узнаешь, как быстро сделать MVP, задеплоить и проверить спрос.',
  },
  {
    icon: '⌨️',
    title: 'Разработчики',
    description: 'Уже кодишь — поймёшь, где AI ускоряет, а где лучше писать самому.',
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

export default function Audience() {
  return (
    <section id="audience" className="py-12 md:py-20">
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
            Для кого <span className="highlight">этот курс</span>
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Подойдёт тем, кто хочет не просто вайб-кодить, а делать проекты и зарабатывать
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {audiences.map(({ icon, title, description }, idx) => (
            <motion.div
              key={title}
              variants={item}
              className="hand-border-thin p-5 bg-[var(--color-paper-light)] hover:bg-[var(--color-highlight)]/20 transition-colors"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                {title}
              </h3>
              <p
                className="mt-1.5 text-sm text-[var(--color-ink-light)]"
                style={{ fontFamily: 'Neucha, cursive' }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
