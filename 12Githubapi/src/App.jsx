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

    if (datanew.trim() !== "") {
      setshow(true)
    } else if (!datanew.trim()) {
      setshow(false)
    }
  }

  return (
    <div className="container">
      <form className="form-wrapper" onSubmit={finfclick}>
        <h1 className="title">GitHub Profile Finder</h1>
        <div className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Enter GitHub username"
            value={datanew}
            onChange={(e) => setdata(e.target.value)}
          />
          <button type="submit" className="submit-button">Search</button>
        </div>

        <div id="profile-card" className={`profile-card ${show ? 'visible' : 'hidden'}`}>
          {error && <p className="error-text">{error}</p>}
          {data && (
            <div className="profile-content">
              <img src={data.avatar_url} alt="User avatar" className="avatar" />
              <p><strong>Username:</strong> {data.login}</p>
              <p><strong>Public Repos:</strong> {data.public_repos}</p>
              <p><strong>Followers:</strong> {data.followers}</p>
              <p><strong>Following:</strong> {data.following}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default App
