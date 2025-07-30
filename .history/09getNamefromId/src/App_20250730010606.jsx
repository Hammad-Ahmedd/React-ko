import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usefoundName from './hooks/UseName'

function App() {
  const [id, setid] = useState()
  const [inputValue, setinputValue] = useState()
  const { data, loading, error } = usefoundName(inputValue)
  


  return (
    <>
      <h1>Select Id</h1>
      <form action="">
        <input type="number"
          placeholder='Enter Id'
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <button type="submit" >Get Name</button>
        <p></p>
      </form>
    </>
  )
}

export default App
