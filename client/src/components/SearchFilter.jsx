import React from 'react'
import DropdownFilter from './DropdownFilter'

const SearchFilter = ({ query, setQuery, filter, setFilter }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      <input
        type="text"
        placeholder="Search by name or symbol"
        className="w-full sm:w-1/2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 backdrop-blur-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <DropdownFilter filter={filter} setFilter={setFilter} />
    </div>
  )
}
export default SearchFilter
