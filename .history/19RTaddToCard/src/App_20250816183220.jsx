import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ProductCard from './components/ProductCard'

const productsCards = [
  {
    name: "Wireless Headphones",
    price: 99,
    imgsrc: "https://havitstore.pk/cdn/shop/files/H2590.1596_1.png?v=1719232522"
  },
  {
    name: "Smart Watch",
    price: 149,
    imgsrc: "https://media.wisemarket.com.pk/product/bml-bw8-wearfit-pro-ultra-smart-watch-57.webp"
  },
  {
    name: "Lap Top",
    price: 500,
    imgsrc: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/05/framework-laptop-2.png"
  }
]
function App() {
  const useselect = useSelector((state) => state.products)
  const [cardshow, setcardshow] = useState(false);
  function cardopenclose() {
    setcardshow((pre) => !pre)
  }
  function cardclose() {
    setcardshow((pre) => !pre)
  }
  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold text-blue-600">
          MyShop
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Shop</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        <div className="relative" onClick={cardopenclose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-gray-700 hover:text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-4a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {useselect.length}
          </span>
        </div>
      </nav>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsCards.map((product) => (
          <ProductCard
            key={product.id}
            productContent={{
              id: product.id,
              imgsrc: product.imgsrc,
              name: product.name,
              price: product.price,
              quantity: 1
            }}
          />
        ))}
        <div className="fixed inset-0 flex items-center justify-center bg-black/25 p-4" style={{ display: cardshow ? "flex" : "none" }}>
          <div className="relative flex flex-col gap-4 bg-white rounded-lg overflow-auto w-[100%] max-w-lg max-h-[90vh] p-6 md:w-[70%] lg:w-1/2 md:p-4">
            <p className="absolute right-4 top-2 -rotate-45 text-3xl cursor-pointer" onClick={cardclose} >+</p>
            {products.length < 1 && <p style={{ color: "red", textAlign: "center" }} >NO ITEM</p>}
            {products.map((product) => (
              <CardItem
                key={product.id}
                productinfo={{
                  id: product.id,
                  imgsrc: product.imgsrc,
                  name: product.name,
                  price: product.price,
                  quantity: product.quantity
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
