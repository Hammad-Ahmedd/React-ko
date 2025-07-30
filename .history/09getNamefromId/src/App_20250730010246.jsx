import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usefoundName from './hooks/UseName'

function App() {
const [id,setid]=useState()


  return (
<>
<h1>Select Id</h1>
<form action="">
  <input type="number"
  placeholder='Enter Id'
  />
  <button>Get Name</button>

</form>
</>
  )
}

export default App
