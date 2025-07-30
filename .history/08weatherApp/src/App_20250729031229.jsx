import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWeather from './hooks/Useweather'

function App() {
const [val,setval]=useState("")
const loc=useWeather(val)


  return (
    <>
    <form action="">
   <input type="text"
   
   />
   
   <p></p>

    </form>
    </>
  )
}

export default App
