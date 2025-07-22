import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("Black")

  return (
    <>
      <div className='full-w' style={{ backgroundColor: color }}>
        <div className='btn-wrapper' >
          <button className='btn' >Red</button>
          <button className='btn' >Red</button>
          <button className='btn' >Red</button>

        </div>
      </div>
    </>
  )
}

export default App
