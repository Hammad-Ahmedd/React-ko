import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Usecontextprovider } from './Usecontext/Usecontexttic'
import Boxs from './Components/Boxs'

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
  const [boxs, setboxs] = useState(Array(9).fill([]))
boxs.map((box)=>)

  const ClickBox = ((box) => {
    setboxs((pre) => pre.map((prebox) => prebox.id === box.id ? { ...prebox, checkbox: !prebox.checkbox } : prebox))
  })

  console.log(boxs);


  return (
    <Usecontextprovider value={{ boxs, ClickBox }}>
      <div className="tic-wrapper">
        {boxs.map((box) => (
          <Boxs box={box} />
        ))}
      </div>
    </Usecontextprovider>
  )
}

export default App
