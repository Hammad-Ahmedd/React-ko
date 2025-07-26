import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usecurrency from './hooks/usecurrency'
import Inputbox from './components/Inputbox'


function App() {
const [amount,setamount]=useState(0)
const [to,setto]=useState()
const [from,setfrom]=useState()
const [convertedcurr,setconvertedcurr]=useState(0)
const currinfo=usecurrency(from)
const option=us
  return (
    <>
    </>
  )
}

export default App
