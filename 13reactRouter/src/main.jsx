import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Nav from './Components/Nav.jsx'
import User from './Components/User.jsx'

const func = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Nav />} />
      <Route path='/about' element={<Nav />} />
      <Route path='/Contact' element={<Nav />} />
      <Route path='/service' element={<Nav />} />
      <Route path='/user/:userid' element={<User />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={func} />
  </StrictMode>,
)
