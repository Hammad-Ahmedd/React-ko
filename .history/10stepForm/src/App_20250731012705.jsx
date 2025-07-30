import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const option = [
  { id: "opt1", label: "Photography" },
  { id: "opt2", label: "Reading" },
  { id: "opt3", label: "Gardening" },
  { id: "opt4", label: "Drawing or Painting" },
  { id: "opt5", label: "Playing a Musical Instrument" }
]
function App() {
  const [emailinput, setemailinput] = useState("")
  const [nameinput, setnameinput] = useState("")
  const [select, setselect] = useState([])

  const [step1, setstep1] = useState(false)
  const [step2, setstep2] = useState(true)
  const [step3, setstep3] = useState(true)

  function checkSelect(id) {
    if (select.includes(id)) {
      setselect(select.filter((e) => e !== id))
    } else {
      setselect([...select, id])
    }
  }

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
  function onClickStep2() {
    if (select.length >= 1) {
      setstep2(true)
      setstep3(false)
    } else {
      alert("Select a option")
    }
  }

  function gobacktostep1() {
    setstep1(false)
    setstep2(true)
  }
  console.log(select);
  console.log(select.length);
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
                {option.map((opt) =>
                  <label key={opt.id}><input
                    id={opt.id}
                    type="checkbox"
                    onChange={() => checkSelect(opt.id)}
                    checked={select.includes(opt.id)}
                  /> {opt.label}</label>
                )}
              </div>
            </div>
            <div className="btn-wrapper space-between">
              <button className="btn btn-back" onClick={gobacktostep1}>Back</button>
              <button className="btn btn-next" onClick={onClickStep2}>Next</button>
            </div>
          </div>
          {/* Step 3 */}
          <div id="step-3" style={{ display: step3 ? "none" : "block" }}>
            <div className="thankyou-box">
              <h1 className="step-title">Thank You!</h1>
              <p className="thankyou-text">Your preferences have been saved successfully.</p>
              <button onClick={() => window.location.reload} type="submit" className="btn btn-submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
