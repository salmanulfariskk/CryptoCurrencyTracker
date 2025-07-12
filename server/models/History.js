import mongoose from 'mongoose'

const historySchema = new mongoose.Schema({
  coinId: String,
  name: String,
  symbol: String,
  price: Number,
  marketCap: Number,
  change24h: Number,
  lastUpdated: Date,
})

export default mongoose.model('History', historySchema)
