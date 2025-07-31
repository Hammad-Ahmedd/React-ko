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
      const check1 = item[0] === txt[0] && item[1] === txt[1] && item[2] === txt[2]
      const check2 = item[0] === txt[0] && item[3] === txt[3] && item[6] === txt[6]
      const check3 = item[0] === txt[0] && item[4] === txt[4] && item[7] === txt[7]
      const check4 = item[1] === txt[1] && item[4] === txt[4] && item[7] === txt[7]
      const check5 = item[2] === txt[2] && item[5] === txt[5] && item[8] === txt[8]
      const check6 = item[2] === txt[2] && item[4] === txt[4] && item[6] === txt[6]
      const check7 = item[3] === txt[3] && item[4] === txt[4] && item[5] === txt[5]
      const check8 = item[6] === txt[6] && item[7] === txt[4] && item[7] === txt[7]


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
