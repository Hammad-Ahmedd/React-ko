import { useState, useCallback, useEffect } from 'react'
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

    for (let i = 0; i < leng; i++) {
      let strnew = Math.floor(Math.random() * str.length + 1);
      newpass += strnew
    }
    setpass(newpass)
  }, [number, char, leng])
  useEffect(() => {
    genratepass()
  }, [number, char, leng])

  return (
    <>
      <input
        type="text"
        value={pass}
        placeholder="Password"
        readOnly
      />

    </>
  )
}

export default App
