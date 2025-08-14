import React from 'react'

function CardItem({ productinfo }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 shadow-sm" id={productinfo.id}>
      <div className="flex items-center gap-4">
        <img
          src={productinfo.imgsrc}
          alt={productinfo.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="font-semibold">{productinfo.name}</h4>
          <span className="text-gray-600 text-sm">${productinfo.price}</span>
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
