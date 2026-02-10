import express from 'express'
import cors from 'cors'
import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// --- Database setup ---
const db = new Database(join(__dirname, 'leads.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    telegram TEXT NOT NULL,
    phone TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`)

// --- Server ---
const app = express()
app.use(cors())
app.use(express.json())

// Сохранить заявку
app.post('/api/leads', (req, res) => {
  const { name, telegram, phone } = req.body

  if (!name?.trim() || !telegram?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: 'Все поля обязательны.' })
  }

  const stmt = db.prepare('INSERT INTO leads (name, telegram, phone) VALUES (?, ?, ?)')
  const result = stmt.run(name.trim(), telegram.trim(), phone.trim())

  res.json({ ok: true, id: result.lastInsertRowid })
})

// Посмотреть все заявки (для тебя)
app.get('/api/leads', (req, res) => {
  const leads = db.prepare('SELECT * FROM leads ORDER BY id DESC').all()
  res.json(leads)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`API сервер запущен: http://localhost:${PORT}`)
  console.log(`Заявки: http://localhost:${PORT}/api/leads`)
})
