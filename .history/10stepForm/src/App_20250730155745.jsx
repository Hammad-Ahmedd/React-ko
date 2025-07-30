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
            <div className="input-wrapper">
              <input type="text" name="Full Name"
              placeholder=''
              />
              <input type="email" name="email" />
            </div>
            <div className="btn-wrapper">
              <button></button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
