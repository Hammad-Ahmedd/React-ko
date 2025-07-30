import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 const option=[
  {id:opt1 , }
 ]



function App() {
  const [emailinput, setemailinput] = useState("")
  const [nameinput, setnameinput] = useState("")
  const [check, setcheck] = useState()

  const [step1, setstep1] = useState(false)
  const [step2, setstep2] = useState(true)
  const [step3, setstep3] = useState([])
  console.log(check);



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
  function gobacktostep1() {
    setstep1(false)
    setstep2(true)
  }

  return (
    <>
      <div className="stepform">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Step 1 */}
          <div id="step-1" style={{ display: step1 ? "none" : "block" }}>
            <h1 className="step-title">Step 1</h1>
            <div className="input-wrapper">
              <input
                type="text"
                name="Full Name"
                placeholder="Full Name"
                value={nameinput}
                onChange={(e) => setnameinput(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={emailinput}
                onChange={(e) => setemailinput(e.target.value)}
              />
            </div>
            <div className="btn-wrapper">
              <button className="btn btn-next" onClick={onClickStep1}>Next</button>
            </div>
          </div>

          {/* Step 2 */}
          <div id="step-2" style={{ display: step2 ? "none" : "block" }}>
            <h1 className="step-title">Step 2</h1>
            <div className="checkbox-wrapper">
              <div className="checkbox-column">
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 1</label>
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 2</label>
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 3</label>
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 4</label>
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 5</label>
              </div>
              <div className="checkbox-column">
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 6</label>
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 7</label>
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 8</label>
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 9</label>
                <label><input type="checkbox" onChange={(e) => setcheck(e.target.value)} checked={check} /> Option 10</label>
              </div>
            </div>
            <div className="btn-wrapper space-between">
              <button className="btn btn-back" onClick={gobacktostep1}>Back</button>
              <button className="btn btn-next">Next</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
