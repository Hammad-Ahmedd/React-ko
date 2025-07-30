import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWeather from './hooks/Useweather'

function App() {
  const [val, setval] = useState("")
  const [location, setlocation] = useState("")
  const loc = useWeather(val)

  function onsub(e) {
    e.preventDefault()
    setlocation(val)

  }




  return (
    <>
      <form  onSubmit={onsub}>
        <input type="text"
          value={val}
          onChange={(e) => setval(e.target.value)}
        />
        <button type="submit"  >Search</button>
        <p>{loc}</p>

      </form>
    </>
  )
}

export default App
