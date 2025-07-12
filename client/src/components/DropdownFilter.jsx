import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const options = [
  { value: 'none', label: 'No Filter' },
  { value: 'marketCapHigh', label: 'Market Cap: High to Low' },
  { value: 'priceLow', label: 'Price: Low to High' },
  { value: 'priceHigh', label: 'Price: High to Low' }
]

const DropdownFilter = ({ filter, setFilter }) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (value) => {
    setFilter(value)
    setOpen(false)
  }

  return (
    <div className="relative w-full sm:w-1/3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-2 text-left rounded-lg bg-white/10 border border-white/20 text-white flex justify-between items-center backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {options.find(opt => opt.value === filter)?.label}
        <FiChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-2 bg-gray-900 border border-white/20 rounded-lg shadow-lg text-white">
          {options.map(opt => (
            <li
              key={opt.value}
              className="px-4 py-2 hover:bg-purple-800 cursor-pointer transition"
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownFilter
