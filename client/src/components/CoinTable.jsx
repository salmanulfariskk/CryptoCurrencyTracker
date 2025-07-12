import React from "react";
import { Link } from "react-router-dom";

const CoinTable = ({ coins }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg backdrop-blur-sm bg-white/5 ring-1 ring-white/10">
      <table className="w-full table-auto text-sm text-left text-white">
        <thead className="bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 text-white text-xs uppercase">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Symbol</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">24h%</th>
            <th className="px-4 py-3">Updated</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin.coinId}
              className="border-b border-white/10 hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-800 transition duration-200"
            >
              <td className="px-4 py-3">
                <Link
                  to={`/coin/${coin.coinId}`}
                  className="text-pink-400 hover:underline"
                >
                  {coin.name}
                </Link>
              </td>
              <td className="px-4 py-3 uppercase text-indigo-300 flex items-center gap-2">
                <img
                  src={coin.image}
                  alt={coin.symbol}
                  className="w-6 h-6 object-contain"
                />
                {coin.symbol}
              </td>
              <td className="px-4 py-3">${coin.price.toLocaleString()}</td>
              <td className="px-4 py-3">${coin.marketCap.toLocaleString()}</td>
              <td
                className={`px-4 py-3 font-semibold ${
                  coin.change24h >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {coin.change24h?.toFixed(2)}%
              </td>
              <td className="px-4 py-3 text-sm text-gray-400">
                {new Date(coin.lastUpdated).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
