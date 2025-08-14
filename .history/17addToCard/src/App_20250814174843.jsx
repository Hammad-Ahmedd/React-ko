import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseContextATCProvider } from './UseContext/UseContectAddToCard'

function App() {
  const [count, setCount] = useState()
  const takeit = (val) => {
    setCount(val)
  }
  return (
    <UseContextATCProvider val>

      <h1 className="text-3xl font-bold underline bg-amber-800">
        Hello world!
      </h1>
    </UseContextATCProvider>
  )
}

export default App
