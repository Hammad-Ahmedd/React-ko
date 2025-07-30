import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="stepform">
        <form action="">
          <div id="step-1">
            <div className="input-wrapper" style={{display:"flex" , alignItems:"center", gap:"1rem"}}>
              <input type="text" name="Full Name"
                placeholder='Full Name'
              />
              <input type="email" name="email"
                placeholder='Email'
              />
            </div>
            <div className="btn-wrapper" style={{margin-top:"1rem"}}>
              <button>Next</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
