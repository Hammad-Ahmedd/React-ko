import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todobox from './components/Todoboxs'

function App() {
  const [para,setpara]=useState()
  const [values,setvalue]=useState()

  function createbox(){
     if(values!==""){
      <Todobox 
      inputpara={para}
      />
      set
     }
  }

  return (
    <>
     <form action="">
        <div className="inputs-wrapper">
            <div className="input-wrapper">
                <input id="add-input" type="text" placeholder="Add"
                
                />
                <button id="add-btn"
                onClick={((e)=>{
                e.preventDefault();

                })}
                
                >Add</button>
            </div>
        </div>
    </form>
    </>
  )
}

export default App
