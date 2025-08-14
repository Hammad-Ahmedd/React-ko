import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseContextATCProvider } from './UseContext/UseContectAddToCard'
import Input from './Components/Input'

function App() {
  const [count, setCount] = useState()
  const takeit = (val) => {
    setCount(val)
  }
  return (
    <UseContextATCProvider value={{takeit}}>
<input
    </UseContextATCProvider>
  )
}

export default App
