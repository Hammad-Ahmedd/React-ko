import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToCard } from '../features/ProductSlice'


function ProductCard({ productContent, clcikyes }) {
    const dispatch = useDispatch();
    const onAddtoCard = () => {
        dispatch(addToCard({
            id: productContent.id,
            productName: productContent.productName,
            imgsrc: productContent.imgsrc,
            price: productContent.price,
            quantity: productContent.quantity || 1,
        }))
        cli
    }
    return (
        <>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                    <img
                        src={productContent.imgsrc}
                        alt={productContent.productName}
                        className="w-full h-70 "
                    />
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        ${productContent.price}
                    </span>
                </div>

                <div className="p-4 flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-gray-800">{productContent.productName}</h3>
                    <button
                        id={productContent.id}
                        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
                        onClick={onAddtoCard}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard
