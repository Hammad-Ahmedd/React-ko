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
    image: "https://havitstore.pk/cdn/shop/files/H2590.1596_1.png?v=1719232522"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149,
    image: "https://media.wisemarket.com.pk/product/bml-bw8-wearfit-pro-ultra-smart-watch-57.webp"
  }
]


function App() {
  const [products, setproduct] = useState([]);
  //functions
  const addToCard = (id, product) => {
    setproduct((pre) => pre.id = id ? { product, ...products } : pre)
  }
  const removeToCard = () => { }

  return (
    <UseContextATCProvider value={{ products, addToCard, removeToCard }}>
      <div className="p-6 grid grid-cols-2 gap-6">
        {productsCards.map((product) => (
          <ProductCard
            key={product.id}
            productContent={{
              id: product.id,
              img: product.image,
              name: product.name,
              price: product.price
            }}
          />
        ))}
        <div className="card-wrapper">
          {products.map((productifo) => (
            <CardItem
              product={{
                id: product.id,
                img: product.image,
                name: product.name,
                price: product.price
              }}
            />
          ))}
        </div>
      </div>
    </UseContextATCProvider>
  )
}

export default App
