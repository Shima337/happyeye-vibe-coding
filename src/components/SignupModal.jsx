import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const API_URL = '/api/leads'

export default function SignupModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [telegram, setTelegram] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim() || !telegram.trim() || !phone.trim()) {
      setError('Заполни, пожалуйста, все поля.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, telegram, phone }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Не получилось сохранить заявку.')
      } else {
        setSuccess(true)
      }
    } catch (err) {
      console.error(err)
      setError('Что-то пошло не так. Попробуй ещё раз позже.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setName('')
    setTelegram('')
    setPhone('')
    setError('')
    setSuccess(false)
    onClose?.()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-ink)]/30 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="w-full max-w-md paper-card p-7 bg-[var(--color-paper-light)]"
          >
            <div className="flex items-center justify-between mb-5">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                Записаться на курс ✎
              </h2>
              <button
                type="button"
                onClick={handleClose}
                className="text-[var(--color-ink-faded)] hover:text-[var(--color-ink)] text-2xl leading-none transition-colors"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                &times;
              </button>
            </div>

            {success ? (
              <div className="space-y-4">
                <p style={{ fontFamily: 'Neucha, cursive' }}>
                  Спасибо! Мы получили твою заявку. Свяжемся с тобой в ближайшее время через Telegram
                  или по телефону.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full hand-button-filled"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  Ок ✓
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-sm mb-1"
                    style={{ fontFamily: 'Caveat, cursive', fontSize: '1.15rem' }}
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="hand-input"
                    placeholder="Как к тебе обращаться"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1"
                    style={{ fontFamily: 'Caveat, cursive', fontSize: '1.15rem' }}
                  >
                    Ник в Telegram
                  </label>
                  <input
                    type="text"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    className="hand-input"
                    placeholder="@nickname"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1"
                    style={{ fontFamily: 'Caveat, cursive', fontSize: '1.15rem' }}
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="hand-input"
                  placeholder="+375..."
                  />
                  <p
                    className="mt-1 text-xs text-[var(--color-ink-faded)]"
                    style={{ fontFamily: 'Neucha, cursive' }}
                  >
                    Нужен только для связи по курсу. Спамить не будем.
                  </p>
                </div>

                {error && (
                  <p
                    className="text-sm text-[var(--color-pen-red)]"
                    style={{ fontFamily: 'Neucha, cursive' }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full hand-button-filled disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  {loading ? 'Отправляем...' : 'Отправить заявку →'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
