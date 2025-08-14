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
      JSON.parse(localStorage.setItem("items", "create"))
      setvalue("")
      console.log("create", create);
      console.log("item", item);
    }
  }
  function dele(removetodo) {
    setcreate(create.filter((_, i) => i !== removetodo))
  }
useEffect(()=>)
  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="inputs-wrapper">
          <div className="input-wrapper">
            <input id="add-input" type="text" placeholder="Add"
              value={values}
              onChange={(e) => setvalue(e.target.value)}
            />
            <button id="add-btn"
              onClick={((e) => {
                e.preventDefault();
                maketodo()
              })}

            >Add</button>
          </div>
          {create.map((value, index) => <Todobox
            inputpara={value}
            del={() => dele(index)}
          />)}
        </div>
      </form>
    </>
  )
}

export default App
