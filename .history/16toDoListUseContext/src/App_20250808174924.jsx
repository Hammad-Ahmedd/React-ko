import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todobox from './components/Todolists'
function App() {
  const [create, setcreate] = useState([])
  const [para, setpara] = useState("")
  function maketodo() {
    if (!para.trim() === "") {
      setcreate([...create, para])
      setpara("")
    }

  }
  function dele(removetodo) {
    setcreate(create.filter((_, i) => i !== removetodo))
  }

  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()} >
        <input type="text"
          value={para}
          onChange={(e) => setpara(e.target.value)}
        />
        <button onClick={maketodo} >Make it</button>
      </form>
      <div className="todo-wrapper">
        {create.map((value, index) =>
          <Todobox inputpara={value}
            del={() => dele(index)}
          />
        )}
      </div>
    </>
  )
}

export default App
