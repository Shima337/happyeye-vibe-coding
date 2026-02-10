import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <section id="faq" className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            Частые <span className="highlight">вопросы</span>
          </h2>
          <p
            className="mt-3 text-lg text-[var(--color-ink-light)]"
            style={{ fontFamily: 'Neucha, cursive' }}
          >
            Ответы на то, что спрашивают чаще всего
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="hand-border-thin bg-[var(--color-paper-light)] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-[var(--color-highlight)]/10 transition-colors"
              >
                <span
                  className="pr-4 font-bold"
                  style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}
                >
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  className="shrink-0 text-[var(--color-ink)] text-xl"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-[var(--color-ink)]/10"
                  >
                    <p
                      className="p-4 md:p-5 pt-3 text-[var(--color-ink-light)]"
                      style={{ fontFamily: 'Neucha, cursive' }}
                    >
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
