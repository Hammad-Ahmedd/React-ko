import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useName from './hooks/UseName'
function App() {
  const [name, setName] = useState()
  const [inputValue, setinputValue] = useState()
  const { data, loading, error } = useName(name)
  const [option,setoption]=useState()
  function submitform(e) {
    e.preventDefault()
    setName(inputValue)
  }
for (let i = 0; i < 10; i++) {
    i++
  
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
        <select name="" id="">
          <option value=""></option>
        </select>
        <button type="submit" >Get Name</button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && <p>Id: {name} | Name: {data}</p>}
      </form>
    </>
  )
}

export default App
