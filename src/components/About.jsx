import { motion } from 'framer-motion'
import { Building2, Code, Users, Award } from 'lucide-react'

const stats = [
  { icon: Building2, value: '5+', label: 'лет на рынке разработки' },
  { icon: Code, value: '50+', label: 'реализованных проектов' },
  { icon: Users, value: '200+', label: 'выпускников курсов' },
  { icon: Award, value: '100%', label: 'практики, не теория' },
]

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-violet-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            О компании HappyEye
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Мы — разработчики, которые используют вайб-кодинг в реальных проектах. Не инфоцыгане, а практики: показываем, как делать продукты и зарабатывать на них.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center mx-auto mb-3">
                <Icon size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">{value}</div>
              <div className="text-sm text-gray-600 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
