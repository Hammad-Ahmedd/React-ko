import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
  const [datanew, setdata] = useState("")
  const [show, setshow] = useState(false)
  const { data, error } = Usegithubapi(datanew)

  function finfclick() {
    setshow(true)
  }

  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()
      }>
        <div className="input-wrapper">
          <input type="text"
            value={datanew}
            onChange={(e) => setdata(e.target.value)}
          />
          <button onClick={finfclick}>Press</button>
        </div>
        <div className="profile" style={{ display: show ? "block" : "none" }} >
          <img src={data.avatar_url} alt="" />
          {error && <p>{error}</p>}
          {data && (
            <>
            
            </>
       )}
        </div>
      </form>
    </>
  )
}

export default App
