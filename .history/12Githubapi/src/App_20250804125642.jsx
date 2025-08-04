import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
  const [datanew, setdata] = useState("")
  const [query, setQuery] = useState("")
  const { data, error } = Usegithubapi(query)

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(datanew)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            value={datanew}
            onChange={(e) => setdata(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button type="submit">Search</button>
        </div>

        {query && (
          <div className="profile">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
              <>
                <img src={data.avatar_url} alt="User Avatar" width="100" />
                <p>User Name: {data.login}</p>
                <p>Public Repos: {data.public_repos}</p>
                <p>Followers: {data.followers}</p>
                <p>Following: {data.following}</p>
              </>
            )}
          </div>
        )}
      </form>
    </>
  )
}

export default App
