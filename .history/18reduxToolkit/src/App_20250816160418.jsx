import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addname } from './features/NameSlice'

function App() {
  const disbuth = useDispatch()
  const [input, setinput] = useState("")
  const useselect = useSelector((state) => state.firstName)
  function submitform() {
    e.preventDefault()
    disbuth(addname(input))
  }

  return (
    <>
      {input && <p>Your Name :{input}</p>}
      <form action="" >
        <input type="text"
          value={name}
          onChange={(e) => setinput(e.target.value)}
        />
        <button>LOGIN</button>
      </form>
    </>
  )
}

export default App
