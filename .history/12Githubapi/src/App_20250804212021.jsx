import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
  const [datanew, setdata] = useState("")
  const [show, setshow] = useState(false)
  const { data, error } = Usegithubapi(datanew)

  function finfclick(e) {
    e.preventDefault()
    if (!datanew.trim()) return
    if(datanew.trim())
    setshow(true)
  }

  return (
    <>
      <form action="" onSubmit={finfclick}>
        <div className="input-wrapper">
          <input type="text"
            value={datanew}
            onChange={(e) => setdata(e.target.value)}
          />
          <button type="submit">Press</button>
        </div>
        <div className="profile" style={{ display: show ? "block" : "none" }} >
          {error && <p>{error}</p>}
          {data && (
            <>
              <div>
                <img src={data.avatar_url} alt="User_avater" />
                <p>User Name: {data.login}</p>
                <p>public Repos: {data.public_repos}</p>
                <p>followers: {data.followers}</p>
                <p>following: {data.following}</p>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  )
}

export default App
