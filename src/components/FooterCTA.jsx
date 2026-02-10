import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'

export default function FooterCTA({ onOpenSignup }) {
  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-violet-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Готов создавать проекты и зарабатывать?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-violet-100"
          >
            Запишись на курс и получи доступ к урокам и поддержке
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-violet-700 bg-white hover:bg-violet-50 shadow-lg transition-all"
              onClick={onOpenSignup}
            >
              <Mail size={20} />
              Записаться на курс
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/80 hover:bg-white/10 transition-all"
            >
              <MessageCircle size={20} />
              Написать в поддержку
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="https://happyai.one" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white">
              HappyAI
            </a>
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <a href="#program" className="hover:text-white transition-colors">
                Программа
              </a>
              <a href="#pricing" className="hover:text-white transition-colors">
                Тарифы
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Контакты
              </a>
            </nav>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Telegram">
                Telegram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="VK">
                VK
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © {new Date().getFullYear()} <a href="https://happyai.one" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">HappyAI</a>. Курсы вайб-кодинга.
          </div>
        </div>
      </footer>
    </>
  )
}
