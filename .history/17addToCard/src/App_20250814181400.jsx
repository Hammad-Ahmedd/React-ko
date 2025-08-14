import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseContextATCProvider } from './UseContext/UseContectAddToCard'
import Card from './Components/Card'
import CardItem from './Components/CardItem'

const product = {
  [
    
  ]
}

function App() {
cnst [product,setproduct]=useState([])
  return (
    <UseContextATCProvider >
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
