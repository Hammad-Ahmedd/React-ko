import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWeather from './hooks/Useweather'

function App() {
  const [val, setval] = useState("")
  const [location, setlocation] = useState("")
  const loc = useWeather(location)

  function onsub(e) {
    e.preventDefault()
    setlocation(val)

  }
  return (
    <>
      <form action="" onSubmit={onsub}>
        <input type="text"
          value={val}
          onChange={(e) => setval(e.target.value)}
        />
        <button type="submit"  >Search</button>
        {location && loc && (
          <p>Location: {location} | Temperature: {loc}             Convert <span className="font-bold">{from.toUpperCase()}</span> to <span className="font-bold">{to.toUpperCase()}</span>
</p>
        )}


      </form>
    </>
  )
}

export default App
