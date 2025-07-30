import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [emailinput, setemailinput] = useState("")
  const [nameinput, setnameinput] = useState("")

  const [step1, setstep1] = useState(false)
  const [step2, setstep2] = useState(true)
  const [step3, setstep3] = useState(true)


  function emailvalid() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailinput);
  }

  function onClickStep1() {
    if (nameinput.trim() !== "" && emailvalid()) {
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
            <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Step 2</h1>

            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap"
            }}>
              {/* Left side checkboxes */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <label><input type="checkbox" /> Option 1</label>
                <label><input type="checkbox" /> Option 2</label>
                <label><input type="checkbox" /> Option 3</label>
                <label><input type="checkbox" /> Option 4</label>
                <label><input type="checkbox" /> Option 5</label>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <label><input type="checkbox" /> Option 6</label>
                <label><input type="checkbox" /> Option 7</label>
                <label><input type="checkbox" /> Option 8</label>
                <label><input type="checkbox" /> Option 9</label>
                <label><input type="checkbox" /> Option 10</label>
              </div>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              <button style={{
                padding: "0.6rem 1.5rem",
                fontSize: "1rem",
                backgroundColor: "#ccc",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}>
                Back
              </button>
              <button style={{
                padding: "0.6rem 1.5rem",
                fontSize: "1rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}>
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
