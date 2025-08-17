import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addname } from './features/NameSlice'

function App() {
  const disbuth = useDispatch()
  const [inputs, setinputs] = useState("")
  const useselect = useSelector((state) => state.firstname)
  function submitform(e) {
    e.preventDefault()
    disbuth(addname(inputs))
    setinputs("")
  }

  return (
    <>
      {useselect && <p>Your Name: {useselect}</p>}
      <form action="" onSubmit={submitform} >
        <input type="text"          value={inputs}
          onChange={(e) => setinputs(e.target.value)}
        />
        <button>LOGIN</button>
      </form>
    </>
  )
}

export default App
