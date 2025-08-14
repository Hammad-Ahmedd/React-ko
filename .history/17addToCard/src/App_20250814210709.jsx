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
  }
]


function App() {
  const [products, setproduct] = useState([]);
  //functions
  const addToCard = (product) => {
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
      <div className="relative min-h-screen bg-gray-100">
        
        {/* HEADER with Basket */}
        <header className="flex justify-end items-center p-4 bg-white shadow-md sticky top-0 z-50">
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="relative"
          >
            <ShoppingCartIcon className="w-8 h-8 text-gray-700 hover:text-gray-900" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {products.length}
            </span>
          </button>
        </header>

        {/* MAIN CONTENT */}
        <div className="p-6 grid grid-cols-2 gap-6">
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
        </div>

        {/* CART DROPDOWN */}
        {cartOpen && (
          <div className="absolute top-16 right-4 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
            <h2 className="text-lg font-semibold mb-3">Your Cart</h2>
            {products.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            ) : (
              <div className="flex flex-col gap-3">
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
            )}
          </div>
        )}

      </div>
    </UseContextATCProvider>
  )
}

export default App
