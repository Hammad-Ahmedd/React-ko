import React from 'react'

function Input({ val }) {

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2"></h3>
            <p className="text-gray-600 text-sm"></p>
            <span className="text-xl font-bold mt-2"></span>
            <button
                onClick={() => onAddToCart(product)}
                className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default Input
