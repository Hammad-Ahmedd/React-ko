import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todobox from './components/Todoboxs'

function App() {
  const [values, setvalue] = useState()
 const [create,setcreate]=useState()
  function createbox() {
    if (values !== "") {
      setcreate(<ti)
      setvalue("");
    }
  }

  return (
    <>
      <form action="">
        <div className="inputs-wrapper">
          <div className="input-wrapper">
            <input id="add-input" type="text" placeholder="Add"
              value={values}
              onChange={(e) => setvalue(e.target.value)}

            />
            <button id="add-btn"
              onClick={((e) => {
                e.preventDefault();
                createbox()
              })}

            >Add</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default App
