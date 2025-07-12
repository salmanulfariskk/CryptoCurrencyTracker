import React from 'react'
import { useParams } from 'react-router-dom'
import CoinChart from '../components/CoinChart.jsx'

const CoinDetail = () => {
  const { coinId } = useParams()

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold my-4 text-center">History for {coinId}</h2>
      <CoinChart coinId={coinId} />
    </div>
  )
}

export default CoinDetail
