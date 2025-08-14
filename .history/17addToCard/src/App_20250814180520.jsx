import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseContextATCProvider } from './UseContext/UseContectAddToCard'
import Card from './Components/Card'

function App() {

  return (
    <UseContextATCProvider >
      <div className="p-6 grid grid-cols-2 gap-6">
        <Card />
      </div>
    </UseContextATCProvider>
  )
}

export default App
