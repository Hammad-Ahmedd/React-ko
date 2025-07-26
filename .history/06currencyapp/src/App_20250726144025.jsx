import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usecurrency from './hooks/usecurrency'
import Inputbox from './components/Inputbox'


function App() {
  const [amount, setamount] = useState(0)
  const [to, setto] = useState()
  const [from, setfrom] = useState()
  const [convertedcurr, setconvertedcurr] = useState(0)
  const currinfo = usecurrency(from)
  const option = object.key(currinfo)
  console.log(option)
  console.log(currinfo)
  console.log(from)
  console.log(to)


  return (
    <>
    </>
  )
}

export default App
