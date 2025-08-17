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
  const useselect = useSelector(state.firstName)
  function submitform(e) {
    e.preventDefault()
    disbuth(addname(inputs))
  }

  return (
    <>
      {inputs && <p>Your Name: {useselect}</p>}
      <form action="" onSubmit={(e) => submitform(e)} >
        <input type="text"
          value={inputs}
          onChange={(e) => setinputs(e.target.value)}
        />
        <button>LOGIN</button>
      </form>
    </>
  )
}

export default App
