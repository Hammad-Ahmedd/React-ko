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
  const [win, setwin] = useState("")
  const [stopplaying, setstopplaying] = useState(true)
  const [a, seta] = useState(0);
  const [scoreX, setscoreX] = useState(0)
  const [scoreY, setscoreY] = useState(0)
  localStorage.setItem("scoreX", scoreX);
  localStorage.setItem("scoreY", scoreY);

  function nowclick(ind) {
    if (stopplaying) {
      if (txt[ind] !== "") return;
      const newboared = [...txt]
      newboared[ind] = change ? "X" : "O"
      setxt(newboared)
      setchange(!change)
    }
  }
  useEffect(() => {
    for (let item of winPatterns) {
      const p1 = txt[item[0]]
      const p2 = txt[item[1]]
      const p3 = txt[item[2]]
      if (p1 !== "" && p1 === p2 && p2 === p3) {
        setwin(`${p1[0]} Win`)
        setstopplaying(false)
        if (p1 === "X") {
          setscoreX(scoreX + 1)
        } else {
          setscoreY(scoreY + 1)
        }
      }
      if (txt.every(cell => cell !== "")) {
        setwin("Draw")
        setstopplaying(false)
      }
    }

  }, [txt])

  function playagain() {
    txt.fill("")
    setwin("")
    setstopplaying(true)
    console.log(txt);
  }

  return (
    <>
      <div className='tictactoe-wrapper'>
        <div className="score-wrapper">
          <p>Y score <span style={{color:}} >{scoreY}</span></p>
          <p>X score <span>{scoreX}</span></p>
        </div>
        <div className="tictactoe-grid">
          <div className="win-para" style={{ display: stopplaying ? "none" : "flex" }}>
            <p>{win}</p>
            <button onClick={playagain}>Play Agin</button>
          </div>
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
