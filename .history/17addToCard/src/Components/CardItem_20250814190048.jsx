import React from 'react'

function CardItem({ produ }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 shadow-sm" id={produ.id}>
      <div className="flex items-center gap-4">
        <img
          src={produ.src}
          alt={produ.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="font-semibold">{produ.src}</h4>
          <span className="text-gray-600 text-sm">${produ.price}</span>
        </div>
      </div>

      <button
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  )
}

export default CardItem
