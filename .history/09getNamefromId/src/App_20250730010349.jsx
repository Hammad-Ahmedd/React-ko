import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usefoundName from './hooks/UseName'

function App() {
  const [id, setid] = useState()
const { data, loading, error }=usefoundName(id)

  return (
    <>
      <h1>Select Id</h1>
      <form action="">
        <input type="number"
          placeholder='Enter Id'
          onChange={()}
        />
        <button>Get Name</button>
        <p></p>
      </form>
    </>
  )
}

export default App
