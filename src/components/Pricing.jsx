import { motion } from 'framer-motion'

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
    cta: 'Записаться →',
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
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Pricing({ onOpenSignup }) {
  return (
    <section id="pricing" className="py-12 md:py-20">
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
            <span className="highlight-strong">Тарифы</span>
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
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
              className={`relative p-6 md:p-8 bg-[var(--color-paper-light)] ${
                plan.popular
                  ? 'hand-border md:scale-[1.03]'
                  : 'hand-border-thin'
              }`}
              style={{
                boxShadow: plan.popular
                  ? '6px 6px 0 rgba(0,0,0,0.1)'
                  : '3px 3px 0 rgba(0,0,0,0.05)',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-ink)] text-[var(--color-paper)] text-sm font-bold whitespace-nowrap"
                  style={{
                    fontFamily: 'Caveat, cursive',
                    fontSize: '1rem',
                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                  }}
                >
                  ★ Популярный
                </div>
              )}

              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                {plan.name}
              </h3>
              <p
                className="mt-1 text-[var(--color-ink-light)] text-sm"
                style={{ fontFamily: 'Neucha, cursive' }}
              >
                {plan.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-[var(--color-ink-light)]"
                  style={{ fontFamily: 'Neucha, cursive' }}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[var(--color-ink-light)]"
                    style={{ fontFamily: 'Neucha, cursive', fontSize: '1rem' }}
                  >
                    <span className="text-[var(--color-pen-green)] shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-6 block w-full py-3 text-center transition-all cursor-pointer ${
                  plan.popular
                    ? 'hand-button-filled'
                    : 'hand-button'
                }`}
                onClick={onOpenSignup}
                style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}
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
