import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const option = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const winingpart=[
  [0]
]

function App() {

  return (
    <>
      <div className='tictactoe-wrapper'>
        <div className="tictactoe-grid">
          {option.map((e) =>
            <button
              className='btn'
            ></button>
          )}
        </div>
      </div>
    </>
  )
}

export default App
