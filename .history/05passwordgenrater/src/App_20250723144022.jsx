import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [pass, setpass] = useState("")
  const [leng, setleng] = useState(8);
  const genratepass = useCallback(() => {
    let newpass;
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) str += 123456789;
    if (char) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    for (let i = 0; i < length; i++) {
      let strnew = Math.floor(Math.random * str.length);
      newpass += strnew
      console.log(newpass)
    }

  }, [number, char, length])

  return (
    <>
      <button onClick={genratepass} ></button>

    </>
  )
}

export default App
