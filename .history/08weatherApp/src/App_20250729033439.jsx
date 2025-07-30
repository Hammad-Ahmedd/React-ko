import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWeather from './hooks/Useweather'

function App() {
  const [val, setval] = useState("")

  function onsub() {
      const loc = useWeather(val)
    setval(loc)
  }


  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text"
        />
        <button onClick={() => onsub()}  >sacrech</button>
        <p>{val}</p>

      </form>
    </>
  )
}

export default App
