import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Rocket, Code2 } from 'lucide-react'

const audiences = [
  {
    icon: GraduationCap,
    title: 'Новички',
    description: 'Хочешь войти в разработку без лет учёбы — вайб-кодинг плюс правильный подход дадут первый рабочий проект.',
  },
  {
    icon: Briefcase,
    title: 'Фрилансеры',
    description: 'Нужно быстрее делать заказы и брать более сложные — научишься собирать проекты с AI и сдавать клиентам.',
  },
  {
    icon: Rocket,
    title: 'Предприниматели',
    description: 'Есть идея продукта — узнаешь, как быстро сделать MVP, задеплоить и проверить спрос.',
  },
  {
    icon: Code2,
    title: 'Разработчики',
    description: 'Уже кодишь — поймёшь, где AI реально ускоряет, а где лучше писать самому, и как масштабировать проекты.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Audience() {
  return (
    <section id="audience" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Для кого этот курс
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Подойдёт тем, кто хочет не просто вайб-кодить, а делать проекты и зарабатывать
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {audiences.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
