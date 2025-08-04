import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
  const [data, setdata] = useState("")
  const [name, setname] = useState()
  const [photo, setphoto] = useState()
  const [show, setshow] = useState(false)
  const [publicRepos, setpublicRepos] = useState()
  const { promise, error } = Usegithubapi(data)

  function finfclick(e) {
    e.preventDefault()
    setname(promise.login)
    setphoto(promise.avatar_url)
    setshow(true)
  }

  return (
    <>
      <form action="" onSubmit={finfclick}>
        <div className="input-wrapper">
          <input type="text"
            value={data}
            onChange={(e) => setdata(e.target.value)}
          />
          <button type="submit">Press</button>
        </div>
        <div className="profile" style={{ display: show ? "block" : "none" }} >
          <img src={photo} alt="" />
          {error && <p>{error}</p>}
          {data && <div>
            <p>User Name: {name}</p>
          <p>public Repos</p>
          </div>}
        </div>
      </form>
    </>
  )
}

export default App
