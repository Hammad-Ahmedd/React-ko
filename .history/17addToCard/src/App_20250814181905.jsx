import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseContextATCProvider } from './UseContext/UseContectAddToCard'
import Card from './Components/ProductCard'
import CardItem from './Components/CardItem'

const products = [
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

  return (
    <UseContextATCProvider value={{ products, addToCard, removeToCard }}>
      <div className="p-6 grid grid-cols-2 gap-6">
        <Card />
        <div className="card-wrapper">
          <CardItem />
        </div>
      </div>
    </UseContextATCProvider>
  )
}

export default App
