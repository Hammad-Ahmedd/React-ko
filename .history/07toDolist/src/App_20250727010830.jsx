import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todobox from './components/Todoboxs'

function App() {

  return (
    <>
     <form action="">
        <div class="inputs-wrapper">
            <p id="how" ></p>
            <div class="input-wrapper">
                <input id="add-input" type="text" placeholder="Add">
                <button id="add-btn" >Add</button>
            </div>
        </div>
    </form>
    </>
  )
}

export default App
