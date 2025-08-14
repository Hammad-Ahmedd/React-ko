import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Usecontextprovider } from './Usecontext/Usecontexttic'
import Boxs from './Components/Boxs'


function App() {
  const [val,setval]=useState(20)


  return (
    <Usecontextprovider value={{val}}>
      <h1>Hammad </h1>
      <bo
    </Usecontextprovider>
  )
}

export default App
