import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useName from './hooks/UseName'
function App() {
  const [name, setName] = useState()
  const [inputValue, setinputValue] = useState()
  const { data, loading, error } = useName(name)
  const [option, setoption] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  function submitform(e) {
    e.preventDefault()
    setName(inputValue)
  }


  return (
    <>
      <h1>Select Id</h1>
      <form action="" onSubmit={submitform}>
        <select name="" id=""
          value={inputValue}
          onChange={(e) => setinputValue && setinputValue(Number(e.target.value))}
        >
          {option.map((opt) =>
            <option value={opt}=>{opt}</option>
          )}

      </select>
      <button type="submit" >Get Name</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <p>Id: {name} | Name: {data}</p>}
    </form >
    </>
  )
}

export default App
