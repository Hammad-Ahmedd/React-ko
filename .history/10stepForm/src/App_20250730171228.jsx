import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [emailinput, setemailinput] = useState("")
  const [nameinput, setnameinput] = useState("")
  const [step1, setstep1] = useState(false)
  const [step2, setstep2] = useState(true)

  function emailvalid(){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailinput);
  }

  function onClickStep1() {
    if (nameinput.trim() !== "" && emailvalid) {
      setstep1(true)
      setstep2(false)
    } else {
      alert("Please Fill the fields")
    }
  }

  return (
    <>
      <div className="stepform">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div id="step-1" style={{ display: step1 ? "none" : "block" }}>
            <h1>Step 1</h1>
            <div className="input-wrapper" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input type="text" name="Full Name"
                placeholder='Full Name'
                value={nameinput}
                onChange={(e) => setnameinput(e.target.value)}
              />
              <input type="email" name="email"
                placeholder='Email'
                value={emailinput}
                onChange={(e) => setemailinput(e.target.value)}
              />
            </div>
            <div className="btn-wrapper" style={{ marginTop: "1rem" }}>
              <button onClick={onClickStep1} style={{ padding: "0.6rem 1.5rem", fontSize: "1rem" }} >Next</button>
            </div>
          </div>
          <div id="step-2" style={{ display: step2 ? "none" : "block" }}>
            <h1>Step 2</h1>
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
