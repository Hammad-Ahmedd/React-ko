import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usrcontextprovider from './UseContext/Usrcontextprovider'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Usrcontextprovider>
        <Header />
        <br></br>
        <Footer />
      </Usrcontextprovider>
    </>
  )
}

export default App
