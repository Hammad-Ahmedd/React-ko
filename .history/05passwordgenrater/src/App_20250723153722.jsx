import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [pass, setpass] = useState("")
  const [leng, setleng] = useState(8)
  const [uppercase, setuppercase] = useState(false)

  const genratepass = useCallback(() => {
    let newpass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"
    if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) str += "123456789"
    if (char) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

    for (let i = 0; i < leng; i++) {
      let strnew = Math.floor(Math.random() * str.length)
      newpass += str.charAt(strnew)
    }
    setpass(newpass)
  }, [number, char, leng, uppercase])

  useEffect(() => {
    genratepass()
  }, [number, char, leng, uppercase])

  return (
    <div className="container">
      <h2 className="title">Password Generator</h2>
      <input
        type="text"
        value={pass}
        placeholder="Password"
        readOnly
        className="password-input"
      />
      <div className="options">
        <label className="option">
          <input
            type="checkbox"
            checked={number}
            onChange={() => setnumber(prev => !prev)}
          />
          Include Numbers
        </label>

        <label className="option">
          <input
            type="checkbox"
            checked={char}
            onChange={() => setchar(prev => !prev)}
          />
          Include Special Characters
        </label>

        <label className="option">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setuppercase(prev => !prev)}
          />
          Include Uppercase Letters
        </label>
        <input
          type="number"
          value={leng}
          onChange={() => {
            setleng((pre) => pre + 1);
          }}
        />
      </div>
    </div>
  )
}

export default App
