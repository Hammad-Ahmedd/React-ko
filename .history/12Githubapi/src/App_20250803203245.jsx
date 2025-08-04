import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
  const [data, setdata] = useState("Hammad-Ahmedd")
  const promise = Usegithubapi(data)
  const [name, setname] = useState()
  const [photo, setphoto] = useState(promise.avatar_url)
  function finfclick() {
  setname(promise.login)
  setphoto(promise.avatar_url)
  }


  return (
    <>
      <form action="">
        <div className="input-wrapper">
          <input type="text"
            value={data}
            onChange={(e) => setdata(e.target.value)}
          />
          <button>Press</button>
        </div>
        <div className="profile">
          <img src={photo} alt="" />
          <p>Name: {name}</p>
        </div>
      </form>
    </>
  )
}

export default App
