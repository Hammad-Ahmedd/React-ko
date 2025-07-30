import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usefoundName from './hooks/UseName'

function App() {
  const [name, setName] = useState()
  const [inputValue, setinputValue] = useState()
  const { data, loading, error } = usefoundName(inputValue)
  function submitform(e) {
    e.preventDefault()
    setName(data)
  }


  return (
    <>
      <h1>Select Id</h1>
      <form action="" onSubmit={submitform}>
        <input type="number"
          placeholder='Enter Id'
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <button type="submit" >Get Name</button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        { data && <p>{name}</p>}

      </form>
    </>
  )
}

export default App
