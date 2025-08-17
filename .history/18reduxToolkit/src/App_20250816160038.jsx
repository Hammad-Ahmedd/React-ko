import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function App() {
  const disbuth = useDispatch()
  const useselect = useSelector((state)=>state.firstName)
  function submitform() {
    e.preventDefault()
    disbuth()
  }

  return (
    <>
      <p></p>
      <form action="">
        <input type="text"

        />
        <button>LOGIN</button>
      </form>
    </>
  )
}

export default App
