import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
  const [datanew, setdata] = useState("")
  const [name, setname] = useState()
  const [photo, setphoto] = useState()
  const [show, setshow] = useState(false)
  const [publicRepos, setpublicRepos] = useState()
  const { data, error } = Usegithubapi(datanew)

  function finfclick() {
    setname(data.login)
    setphoto(data.avatar_url)
    setpublicRepos(data.public_repos)
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
          {data && <div>
            <p>User Name: {data.login}</p>
            <p>public Repos: {data.public_repos}</p>
            <p>public Repos: {data.public_repos}</p>
          </div>}
        </div>
      </form>
    </>
  )
}

export default App
