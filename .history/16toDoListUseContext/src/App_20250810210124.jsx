import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todobox from './components/Todolists'
function App() {
  const [values, setvalue] = useState("")
  const [create, setcreate] = useState([localStorage.getItem("create")])
  function maketodo() {
    if (values.trim() !== "") {
      setcreate([...create, values])
      setvalue("")
      console.log("create", create);
      console.log("item", item);
    }
  }
  function dele(removetodo) {
    setcreate(create.filter((_, i) => i !== removetodo))
  }
  useEffect(() => {
    JSON.parse(localStorage.setItem("items", "create"))
    


  }, [])
  return (
    <>

    </>
  )
}

export default App
