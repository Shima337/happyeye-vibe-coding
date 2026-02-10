import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Нужен ли опыт в программировании?',
    a: 'Базовое понимание логики приветствуется, но можно начать с нуля. Мы показываем и код, и как ставить задачи AI. Главное — желание делать проект и доводить до конца.',
  },
  {
    q: 'Сколько длится курс?',
    a: 'Материал рассчитан на 6–8 недель при занятости 5–10 часов в неделю. Доступ к урокам остаётся по тарифу (6 или 12 месяцев), можно проходить в своём темпе.',
  },
  {
    q: 'Какие инструменты понадобятся?',
    a: 'Компьютер, браузер, аккаунт в Cursor (или другом AI-редакторе). Мы работаем в основном с Cursor и показываем на его примере. Опционально — GitHub для деплоя.',
  },
  {
    q: 'Будет ли запись занятий?',
    a: 'Курс в формате записанных видеоуроков. Созвонов в прямом эфире нет — смотришь когда удобно. В тарифе Премиум — индивидуальные созвоны с ментором.',
  },
  {
    q: 'Помогаете с деплоем и хостингом?',
    a: 'Да. В уроках разбираем Vercel, Railway и аналоги. В тарифах Продвинутый и Премиум можно задать вопросы по деплою в чат или на ревью.',
  },
  {
    q: 'Можно ли оплатить в рассрочку?',
    a: 'Сейчас доступна единоразовая оплата. Рассрочка может появиться позже — напиши в поддержку, если это важно.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Частые вопросы
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ответы на то, что спрашивают чаще всего
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-2"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span className="pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="shrink-0 text-violet-600"
                >
                  <ChevronDown size={22} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-gray-100"
                  >
                    <p className="p-4 md:p-5 pt-3 text-gray-600">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
