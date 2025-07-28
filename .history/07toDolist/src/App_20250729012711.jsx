import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todobox from './components/Todoboxs'

function App() {
  const [values, setvalue] = useState("")
  const [create, setcreate] = useState([])

  function createbox() {
    if (values.trim !== "") {
      setcreate([...create, values])
      setvalue("")
    }

  }
  function dele(removetodo) {
    setcreate(create.filter((i) => i !== removetodo))
  }

  return (
    <>
      <form action="" onSubmit={(e)=> e.preventDefault()}>
        <div className="inputs-wrapper">
          <div className="input-wrapper">
            <input id="add-input" type="text" placeholder="Add"
              value={values}
              onChange={(e) => setvalue(e.target.value)}
            />
            <button id="add-btn"
              onClick={((e) => {
                createbox()
              })}

            >Add</button>
          </div>
          {create.map((value) => <Todobox
            inputpara={value}
            del={() => dele(index)}
          />)}
        </div>
      </form>
    </>
  )
}

export default App
