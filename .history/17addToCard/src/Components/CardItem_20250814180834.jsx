import React from 'react'

function CardItem() {
    return (
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="font-semibold">hamad</h4>
          <span className="text-gray-600 text-sm">$hamad</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          -
        </button>
        <span className="px-2">{item.quantity}</span>
        <button
          onClick={() => onIncrease(item.id)}
          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          +
        </button>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
    )
}

export default CardItem
