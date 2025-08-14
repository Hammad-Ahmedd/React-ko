import React from 'react'
import { UseAddToCard } from '../UseContext/UseContectAddToCard'

function ProductCard({ productContent }) {
    const { addToCard } = UseAddToCard();
    function addtocard() {
        addToCard({
            ...productContent,
            id: productContent.id,
            name: productContent.name,
            price: productContent.price,
            imgsrc: productContent.imgsrc,
        })
    }
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center" >
            <img
                src={productContent.imgsrc}
                alt={productContent.name}
                className="w-32 h-32 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{productContent.name}</h3>
            <span className="text-xl font-bold mt-2">${productContent.price}</span>
            <div className="flex items-center gap-2">
                <button
                    onClick="#"
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                    onClick="#"
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    +
                </button>
            </div>
            <button
                id={productContent.id}
                className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                onClick={addtocard}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard
