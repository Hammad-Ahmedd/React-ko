import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todobox from '../../07toDolist/src/components copy/Todoboxs'

function App() {
const [create,setcreate]=useState([])
const [para,setpara]=useState("")
function maketodo(){
  if()
}

  return (
    <>
<form action="">
  <input type="text"
  value={para}
  onChange={(e)=>setpara(e.target.value)}
  />
  <button  >Make it</button>
</form>
<div className="todo-wrapper">
  {create.map((e,length)=>
  <Todobox inputpara={para} />
  )}
</div>
    </>
  )
}

export default App
