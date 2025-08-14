import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todobox from './components/Todolists'
function App() {
  const [create, setcreate] = useState([])
  const [values, setvalue] = useState("")
  function maketodo() {
    if (values.trim() !== "") {
      setcreate([...create, values])
      setvalue("")
    }
  }
  function dele(removetodo) {
    setcreate(create.filter((_, i) => i !== removetodo))
  }

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
                createmaketodobox()
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
