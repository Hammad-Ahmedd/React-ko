import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


function CardItem() {
    const useselect = useSelector(state => state.products)
    return (

        <>
            <div
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200 gap-4"
                id={productinfo.id}
            >
                <div className="flex items-center gap-4">
                    <img
                        src={useselect.imgsrc}
                        alt={useselect.name}
                        className="w-16 h-16 object-cover rounded-lg border"
                    />
                    <div>
                        <h4 className="font-semibold text-gray-800">{useselect.name}</h4>
                        <span className="text-gray-500 text-sm">${useselect.price}</span>
                        <br />
                        <span className="text-gray-500 text-sm">Total= ${useselect.price * useselect.quantity}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => useDispatch(decraseQuantity(useselect.id)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
                    >
                        −
                    </button>
                    <span className="w-8 text-center">{useselect.quantity}</span>
                    <button
                        onClick={() => increaseQuantity(useselect.id)}
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
        </>
    )
}

export default CardItem
