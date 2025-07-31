import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


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
  const [change, setchange] = useState(true)
  const [txt, setxt] = useState(Array(9).fill(""))

  function nowclick(ind) {
    if (txt[ind] !== "") return;
    const newboared = [...txt]
    newboared[ind] = change ? "X" : "O"
    setxt(newboared)
    setchange(!change)
  }
  useEffect(() => {
    for (let item of winPatterns) {
      item[0]===txt[0]
    }
  }, [nowclick(), nowclick])

  return (
    <>
      <div className='tictactoe-wrapper'>
        <div className="tictactoe-grid">
          {txt.map((value, index) =>
            <button
              className='btn'
              onClick={() => nowclick(index)}
            >{value}</button>
          )}
        </div>
      </div>
    </>
  )
}

export default App
