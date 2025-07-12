import cron from 'node-cron'
import axios from 'axios'
import Current from './models/Current.js'
import History from './models/History.js'

export const scheduleHistoryJob = () => {
  cron.schedule('0 * * * *', async () => {
    try {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
      )
      const formatted = data.map((coin) => ({
        coinId: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        price: coin.current_price,
        marketCap: coin.market_cap,
        change24h: coin.price_change_percentage_24h,
        lastUpdated: coin.last_updated,
      }))

      await History.insertMany(formatted)
      console.log('Hourly snapshot saved')
    } catch (err) {
      console.error('Cron job failed:', err.message)
    }
  })
}
