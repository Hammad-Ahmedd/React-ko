import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseContextATCProvider } from './UseContext/UseContectAddToCard'
import Input from './Components/Input'

function App() {

  return (
    <UseContextATCProvider >
      <div className="p-6 grid grid-cols-2 gap-6">  <Input /></div>
      <Input />
    </UseContextATCProvider>
  )
}

export default App
