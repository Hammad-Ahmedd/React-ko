import React, { useState } from 'react'
import { UseAddToCard } from '../UseContext/UseContectAddToCard'

function CardItem({ productinfo }) {
  const { removeToCard, increaseQuantity, decraseQuantity } = UseAddToCard()
  function remove() {
    removeToCard(productinfo.id)
  }
  function increase() {
    increaseQuantity(productinfo.id, { ...productinfo })
  }
  function decrase() {
    decraseQuantity(productinfo.id)
  }
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200 gap-4"
      id={productinfo.id}
    >
      <div className="flex items-center gap-4">
        <img
          src={productinfo.imgsrc}
          alt={productinfo.name}
          className="w-16 h-16 object-cover rounded-lg border"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{productinfo.name}</h4>
          <span className="text-gray-500 text-sm">${productinfo.price}</span>
          <span className="text-gray-500 text-sm">${productinfo.price*productinfo,quantity}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decraseQuantity(productinfo.id)}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
        >
          −
        </button>
        <span className="w-8 text-center">{productinfo.quantity}</span>
        <button
          onClick={() => increaseQuantity(productinfo.id)}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
        >
          +
        </button>
      </div>

      <button
        className="text-red-500 hover:text-red-700 transition-colors duration-200 text-sm font-medium"
        onClick={() => removeToCard(productinfo.id)}
      >
        Remove
      </button>
    </div>

  )
}

export default CardItem
