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
          <input type="text" name="Name" id="" />
        </div>
      </form>
    </div>
    </>
  )
}

export default App
