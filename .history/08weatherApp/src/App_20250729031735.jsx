import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWeather from './hooks/Useweather'

function App() {
  const [val, setval] = useState("")
  const loc = useWeather(val)

  function onsub() {
    setval(loc)
  }


  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text"
onChange={()=>setval(val)}
        />
        <button onClick={() => onsub()}  >sacrech</button>
        <p>{val}</p>

      </form>
    </>
  )
}

export default App
