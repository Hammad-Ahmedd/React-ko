import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseContextATCProvider } from './UseContext/UseContectAddToCard'
import ProductCard from './Components/ProductCard'
import CardItem from './Components/CardItem'

const productsCards = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    imgsrc: "https://havitstore.pk/cdn/shop/files/H2590.1596_1.png?v=1719232522"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149,
    imgsrc: "https://media.wisemarket.com.pk/product/bml-bw8-wearfit-pro-ultra-smart-watch-57.webp"
  },
  {
    id: 3,
    name: "Lap Top",
    price: 500,
    imgsrc: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/05/framework-laptop-2.png"
  }
]


function App() {
  const [products, setproduct] = useState([]);
  const [cardshow, setcardshow] = useState(false);
  function cardopenclose() {
    setcardshow((pre) => !pre)
  }
  function cardclose() {
    setcardshow((pre) => !pre)
  }
  //functions
  const addToCard = (product) => {
    setcardshow((pre) => !pre)
    setproduct((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, product];
      }
    });
  };

  const removeToCard = (id) => {
    setproduct(pre => pre.filter((prepro) => (prepro.id !== id)))
  }
  const increaseQuantity = (id) => {
    setproduct((pre) => pre.map((p) => p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
  }
  const decraseQuantity = (id) => {
    setproduct((pre) => pre.map((p) => p.id === id ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : p.quantity } : p))
  }

  console.log(products);
  return (
    <UseContextATCProvider value={{ products, addToCard, removeToCard, increaseQuantity, decraseQuantity }}>
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
            {products.length}
          </span>
        </div>
      </nav>
      <div className="p-6 grid grid-cols-3 gap-6">
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
        <div className="card" style={{ display: cardshow ? "flex" : "none" }}>
          <div className="card-wrapper">
            <p className="cross" onClick={cardclose} >+</p>
            {products.length}
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
    </UseContextATCProvider>
  )
}

export default App
