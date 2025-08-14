import React from 'react'
import { UseAddToCard } from '../UseContext/UseContectAddToCard'

function ProductCard({ productContent }) {
    const {addToCard}=UseAddToCard();
    function  addtocard(){

    }
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center" id={productContent.id}>
            <img
                src={productContent.img}
                alt={productContent.name}
                className="w-32 h-32 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{productContent.name}</h3>
            <span className="text-xl font-bold mt-2">${productContent.price}</span>
            <button
                className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard
