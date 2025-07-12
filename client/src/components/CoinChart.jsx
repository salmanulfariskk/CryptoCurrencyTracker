import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { getCoinHistory } from '../api.js'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

const CoinChart = ({ coinId }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await getCoinHistory(coinId)
      setData(res.data.reverse())
    }
    fetch()
  }, [coinId])

  const chartData = {
    labels: data.map(item => new Date(item.lastUpdated).toLocaleTimeString()),
    datasets: [
      {
        label: 'Price USD',
        data: data.map(item => item.price),
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        fill: true,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    }
  }

  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-2 text-center">Price Trend (Past Snapshots)</h2>
      <Line data={chartData} options={options} />
    </div>
  )
}

export default CoinChart
