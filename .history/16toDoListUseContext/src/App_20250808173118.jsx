import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [create,setcreate]=useState([])
const [para,setpara]=useState("")

  return (
    <>
<form action="">
  <input type="text"
  value={para}
  onChange={(e)=>setpara(e.target.value)}
  />
  <button>Make it</button>
</form>
<div className="todo-wrapper">

</div>
    </>
  )
}

export default App
