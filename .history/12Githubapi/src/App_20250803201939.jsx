import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
  const [data, setdata] = useState("/Hammad-Ahmedd");
  const promise = Usegithubapi(data)
  console.log(promise);



  return (
    <>

    </>
  )
}

export default App
