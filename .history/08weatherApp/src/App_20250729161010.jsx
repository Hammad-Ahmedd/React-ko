import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWeather from './hooks/Useweather'

function App() {
  const [val, setval] = useState("")
  const [location, setlocation] = useState("")
  const [data, loading, erro] = useWeather(location)

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

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {location && data && (
          <p>
            Location: <strong>{location}</strong> | Temperature: <strong>{data}°C</strong>
          </p>
        )}


      </form>
    </>
  )
}

export default App
