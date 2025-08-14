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
      const exists = prev.some((p) => p.id === product.id)
      if (!exists) {
        return [...prev, product]
      }

    });
  }
  const removeToCard = (id) => {
    setproduct(pre => pre.filter((prepro) => (prepro.id !== id)))
  }
  const increaseQuantity = (id, product) => {
    setproduct((pre) => pre.map((p) => p.id === id ? { ...product, quantity: p.quantity + 1 } : p))
  }
  const decraseQuantity = (id, product) => {
    setproduct((pre) => pre.map((p) => p.id === id ? { ...product, quantity:p.quantity>1? quantity:p.quantity - 1:[] } : p))
  }

  console.log(products);
  return (
    <UseContextATCProvider value={{ products, addToCard, removeToCard, increaseQuantity, decraseQuantity }}>
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
        <div className="card-wrapper">
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
    </UseContextATCProvider>
  )
}

export default App
