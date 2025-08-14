import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Usecontextprovider } from './Usecontext/Usecontexttic'
import Boxs from './Components/Boxs'


function App() {
  

  return (
    <Usecontextprovider value={{ boxs, ClickBox }}>

    </Usecontextprovider>
  )
}

export default App
