import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Базовый',
    price: '600',
    period: 'BYN',
    description: 'Для самостоятельного прохождения',
    features: [
      'Доступ ко всем видеоурокам',
      'Чат с участниками',
      'Шаблоны и чек-листы',
      'Сертификат по окончании',
    ],
    cta: 'Выбрать Базовый',
    popular: false,
  },
  {
    name: 'Продвинутый',
    price: '890',
    period: 'BYN',
    description: 'С поддержкой и ревью кода',
    features: [
      'Всё из Базового',
      'Ревью кода от ментора',
      'Ответы в чате в течение 24 ч',
      'Помощь с деплоем и архитектурой',
      'Доступ 6 месяцев',
    ],
    cta: 'Записаться',
    popular: true,
  },
  {
    name: 'Премиум',
    price: '1 900',
    period: 'BYN',
    description: 'Индивидуальный разбор и приоритет',
    features: [
      'Всё из Продвинутого',
      '2 индивидуальные созвона по 1 часу',
      'Разбор твоего проекта под твои цели',
      'Приоритет в очереди на ревью',
      'Доступ 12 месяцев',
    ],
    cta: 'Выбрать Премиум',
    popular: false,
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

export default function Pricing({ onOpenSignup }) {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-gradient-to-b from-violet-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Тарифы
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Выбери формат под свои цели
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`relative rounded-2xl border-2 p-6 md:p-8 bg-white ${
                plan.popular
                  ? 'border-violet-500 shadow-xl shadow-violet-500/20 md:scale-[1.02]'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-sm font-semibold">
                  Популярный
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-gray-600 text-sm">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-violet-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 block w-full py-3 rounded-xl font-semibold text-center transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-500/25'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={onOpenSignup}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
