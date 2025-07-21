import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  function incrementNumber() {
    setCounter(counter + 1);
  }
  function decrementNumber() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <p>Number {counter}</p>
      <button onClick={incrementNumber} >Increment Number</button>
      <br></br>
      <button onClick={decrementNumber} >Decrement Number</button>
    </>
  )
}

export default App
