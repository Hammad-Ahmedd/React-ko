import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usegithubapi from './Hooks/Usegithubapi'

function App() {
  const [data, setdata] = useState("")
  const promise = Usegithubapi(data)
  const [name, setname] = useState()
  const [photo, setphoto] = useState()
  const [show,setshow]=useState(false);
  function finfclick() {
    setname(promise.login)
    setphoto(promise.avatar_url)
  }


  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="input-wrapper">
          <input type="text"
            value={data}
            onChange={(e) => setdata(e.target.value)}
          />
          <button onClick={finfclick}>Press</button>
        </div>
        <div className="profile" style={{display: show? }} >
          <img src={photo} alt="" />
          <p>Name: {name}</p>
        </div>
      </form>
    </>
  )
}

export default App
