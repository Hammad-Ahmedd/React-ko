import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [pass, setpass] = useState("")
  const [leng, setleng] = useState(8);
  const [uppercase, setuppercase] = useState(false)
  const genratepass = useCallback(() => {
    let newpass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"
    if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) str += "123456789"
    if (char) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for (let i = 0; i < leng; i++) {
      let strnew = Math.floor(Math.random() * str.length + 1);
      newpass += str.charAt(strnew);
    }
    setpass(newpass)
  }, [number, char, leng, uppercase])
  useEffect(() => {
    genratepass()
  }, [number, char, leng, uppercase])

  return (
    <>
      <input
        type="text"
        value={pass}
        placeholder="Password"
        readOnly
      />
      <input
        defaultChecked={setnumber}
        type="checkbox"
        onChange={() => {
          setnumber((prev) => !prev)
        }}
      />
      <label>Number</label>
      <input
        type="checkbox"
        onChange={() => {
          setchar((prev) => !prev)
        }}
      />
      <label>Charater</label>
      <input
        type="checkbox"
        onChange={() => {
          setchar((prev) => !prev)
        }}
      />
      <label>Charater</label>
    </>
  )
}

export default App
