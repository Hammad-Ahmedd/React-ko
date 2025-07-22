import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("black")
  const colors = ["red", "green", "blue", "orange", "purple"];
  return (
    <>
      <div className='full-w' style={{ backgroundColor: color }}>
        <div className='btn-wrapper'>
          {colors.map((clr, index) => (
            <button
              key={index}
              className='btn'
              style={{ backgroundColor: clr }}
              onClick={() => setcolor(clr)}
            >
              {clr}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
