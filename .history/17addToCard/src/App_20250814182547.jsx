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
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149,
    image: "https://via.placeholder.com/150"
  }
]


function App() {
  const [products, setproduct] = useState([]);
  //functions
  const addToCard = () => { }
  const removeToCard = () => { }

  return (
    <UseContextATCProvider value={{ products, addToCard, removeToCard }}>
      <div className="p-6 grid grid-cols-2 gap-6">
        {productsCards.map((product) => (
          <ProductCard
          productContent={
            productContent.img
          }
          />
        ))}
        <div className="card-wrapper">
          <CardItem />
        </div>
      </div>
    </UseContextATCProvider>
  )
}

export default App
