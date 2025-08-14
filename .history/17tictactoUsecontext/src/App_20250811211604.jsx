import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Usecontextprovider } from './Usecontext/Usecontexttic'

function App() {
  const [boxs, setboxs] = useState(Array(9).fill(""))

  const ClickBox=((box)=>{
  setboxs(())
  })



  return (
    <Usecontextprovider value={{boxs,ClickBox}}>

    </Usecontextprovider>
  )
}

export default App
