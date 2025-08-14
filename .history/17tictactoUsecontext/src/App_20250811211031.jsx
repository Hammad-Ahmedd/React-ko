import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Usecontextprovider } from './Usecontext/Usecontexttic'

function App() {
  const [boxs, setboxs] = useState(Array(9).fill(""))

  return (
    <Usecontextprovider>

    </>
  )
}

export default App
