import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LandingHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        Track the Top 10 Cryptos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 text-lg text-gray-300 max-w-xl"
      >
        Get real-time price, market cap, and 24h change data with beautiful charts.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-10"
      >
        <Link to="/dashboard">
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:scale-105 transition hover:cursor-pointer">
            Get Latest Currencies
          </button>
        </Link>
      </motion.div>
    </div>
  )
}

export default LandingHero
