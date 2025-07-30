import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWeather from './hooks/Useweather'

function App() {
  const [val, setval] = useState("")
  const [location, setlocation] = useState("")
  const loc = useWeather(val)

  function onsub() {
    setlocation(val)
  }




  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text"
          onChange={(e) => setval(e.target.value)}
        />
        <button onClick={onsub}  >Search</button>
        <p>{loc}</p>

      </form>
    </>
  )
}

export default App
