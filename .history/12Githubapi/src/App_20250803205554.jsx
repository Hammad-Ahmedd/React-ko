import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
  const [data, setdata] = useState("")
  const { promise, error } = Usegithubapi(data)
  const [name, setname] = useState()
  const [photo, setphoto] = useState()
  const [show, setshow] = useState(false);

  function finfclick() {
    setname(promise.login)
    setphoto(promise.avatar_url)
    setshow(true)
  }

  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="input-wrapper">
          <input type="text"
            value={data}
            onChange={(e) => setdata(e.target.value)}
          />
          <button type="">Press</button>
        </div>
        <div className="profile" style={{ display: show ? "block" : "none" }} >
          <img src={photo} alt="" />
          {error && <p>{error}</p>}
          {data && <p>Id: {name}</p>}

        </div>
      </form>
    </>
  )
}

export default App
