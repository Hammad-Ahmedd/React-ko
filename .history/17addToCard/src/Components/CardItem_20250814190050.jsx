import React from 'react'

function CardItem({ product }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 shadow-sm" id={product.id}>
      <div className="flex items-center gap-4">
        <img
          src={product.src}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="font-semibold">{product.src}</h4>
          <span className="text-gray-600 text-sm">${product.price}</span>
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
