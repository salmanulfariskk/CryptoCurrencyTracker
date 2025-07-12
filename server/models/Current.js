import mongoose from 'mongoose'

const currentSchema = new mongoose.Schema({
  coinId: String,
  name: String,
  symbol: String,
  image: String,
  price: Number,
  marketCap: Number,
  change24h: Number,
  lastUpdated: Date,
})

export default mongoose.model('Current', currentSchema)
