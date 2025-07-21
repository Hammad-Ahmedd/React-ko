import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  function incrementNumber() {
    setCounter(counter + 1);
  }

  return (
    <>
      <p>NUmber {counter}</p>
      <button onClick={incrementNumber} >Increment NUmber</button>
      <button>Decrement NUmber</button>
    </>
  )
}

export default App
