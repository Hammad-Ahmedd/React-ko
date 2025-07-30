import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setinputValue] = useState("")
  const [nameinput, setnameinput] = useState(null)
  const [step1, setstep1] = useState(true)

  function onClickStep1() {
    if (inputValue.trim() !== "") {
      setstep1(false)
    } else {
      alert("Please FUll the fields")
    }
  }

  return (
    <>
      <div className="stepform">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div id="step-1">
            <div className="input-wrapper" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input type="text" name="Full Name"
                placeholder='Full Name'
                value={inputValue}
              />
              <input type="email" name="email"
                placeholder='Email'
              />
            </div>
            <div className="btn-wrapper" style={{ marginTop: "1rem" }}>
              <button onClick={onClickStep1} style={{padding:""}} >Next</button>
            </div>
          </div>
          <div id="step-2" style={{ display: step1 ? "none" : "block" }}>
            <div className="input-wrapper" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input type="text" name="Full Name"
                placeholder='Full Name'
              />
              <input type="email" name="email"
                placeholder='Email'
              />
            </div>
            <div className="btn-wrapper" style={{ marginTop: "1rem" }}>
              <button>Next</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
