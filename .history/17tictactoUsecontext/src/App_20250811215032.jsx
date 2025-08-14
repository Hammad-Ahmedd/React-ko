import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Usecontextprovider } from './Usecontext/Usecontexttic'

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function App() {
  const [boxs, setboxs] = useState(Array(9).fill(""))

  const ClickBox = ((box) => {
    setboxs((pre) => pre.map((prebox) => prebox.id===id ? {...prebox, checkbox:true}: prebox      
    ))
  })



  return (
    <Usecontextprovider value={{ boxs, ClickBox }}>

    </Usecontextprovider>
  )
}

export default App
