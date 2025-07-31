import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const option = [1, 2, 3, 4, 5, 6, 7, 8, 9]


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
  const [change, setchange] = useState(false)
  const [txt, setxt] = useState(Array(9).fill(""))

  function nowclick(ind) {
    if (txt[ind !== ""]) return;

    const newboared = [...txt]
    newboared[ind] = change ? "X" : "o"
  }
  return (
    <>
      <div className='tictactoe-wrapper'>
        <div className="tictactoe-grid">
          {option.map((opt) =>
            <button
              className='btn'
              onClick={(e) => e.nowclick()}
            >{txt}</button>
          )}
        </div>
      </div>
    </>
  )
}

export default App
