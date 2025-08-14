import React, { useState } from 'react'
import { UseAddToCard } from '../UseContext/UseContectAddToCard'

function CardItem({ productinfo }) {
  const { removeToCard,increaseQuantity,decraseQuantity } = UseAddToCard()
  function remove() {
    removeToCard(productinfo.id)
  }
  function increase(){
    increaseQuantity()
  }

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
      <div className="flex items-center gap-2">
        <button
          onClick={decrease}
          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          -
        </button>
        <span className="px-2">{productinfo.quantity}</span>
        <button
          onClick={increase}
          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          +
        </button>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={remove}
      >
        Remove
      </button>
    </div>
  )
}

export default CardItem
