import express from 'express'
import axios from 'axios'
import Current from '../models/Current.js'
import History from '../models/History.js'

const router = express.Router()

// GET /api/coins
router.get('/coins', async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
    )

    const formatted = data.map((coin) => ({
      coinId: coin.id,
      name: coin.name,
      image:coin.image,
      symbol: coin.symbol,
      price: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h,
      lastUpdated: coin.last_updated,
    }))

    // Overwrite current data
    await Current.deleteMany({})
    await Current.insertMany(formatted)

    res.json(formatted)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST /api/history
router.post('/history', async (req, res) => {
  try {
    const currentData = await Current.find({})
    await History.insertMany(currentData)
    res.json({ message: 'History snapshot saved' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET /api/history/:coinId (optional)
router.get('/history/:coinId', async (req, res) => {
  const { coinId } = req.params
  const history = await History.find({ coinId }).sort({ lastUpdated: -1 })
  res.json(history)
})

export default router
