import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Usecontextprovider } from './Usecontext/Usecontexttic'
import Boxs from './Components/Boxs'


function App() {
  

  return (
    <Usecontextprovider value={{ boxs, ClickBox }}>
      <div className="tic-wrapper">
        {boxs.map((box) => (
          <Boxs key={box.id} box={box} />
        ))}
      </div>
    </Usecontextprovider>
  )
}

export default App
