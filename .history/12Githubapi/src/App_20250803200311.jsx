import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
const [data,setdata]=useState("Hammad");
const promise =Usegithubapi(data)


  return (
    <>

    </>
  )
}

export default App
