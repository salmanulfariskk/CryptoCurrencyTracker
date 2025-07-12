import { useEffect, useState } from 'react'
import { getTopCoins } from '../api.js'
import CoinTable from '../components/CoinTable.jsx'
import SearchFilter from '../components/SearchFilter.jsx'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'


const Dashboard = () => {
  const [coins, setCoins] = useState([])
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('none')

  useEffect(() => {
    fetchCoins()
    const interval = setInterval(fetchCoins, 1800000)
    return () => clearInterval(interval)
  }, [])

  const fetchCoins = async () => {
    const res = await getTopCoins()
    setCoins(res.data)
  }

  const filteredCoins = coins
    .filter((coin) =>
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === 'marketCapHigh') return b.marketCap - a.marketCap
      if (filter === 'priceLow') return a.price - b.price
      if (filter === 'priceHigh') return b.price - a.price
      return 0
    })

  return (
    <div className="min-h-screen px-4 pb-10 text-white">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center pt-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
      >
        Live Crypto Dashboard
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:scale-105 transition shadow-lg"
        >
          <FiArrowLeft className="text-xl" />
        </Link>

      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-4 text-gray-300 max-w-xl mx-auto"
      >
        Updated every 30 minutes • Search, sort & explore the top 10 cryptocurrencies
      </motion.p>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10"
      >
        <SearchFilter query={query} setQuery={setQuery} filter={filter} setFilter={setFilter} />
        <div className="mt-6">
          <CoinTable coins={filteredCoins} />
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
