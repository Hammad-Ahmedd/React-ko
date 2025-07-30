import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [inputValue,setinputValue]=useState("")
const [nameinput,setnameinput]=useState(null)
const check=inputValue.trim()

function onSubmit(){
  
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
                onChange={(e)=>setinputValue(e.target.value)}
              />
              <input type="email" name="email"
                placeholder='Email'
              />
            </div>
            <div className="btn-wrapper" style={{ marginTop: "1rem" }}>
              <button>Next</button>
            </div>
          </div>
          <div id="step-2" style={{ display: "none" }}>
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
