import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const productsCards = [
  {
    name: "Wireless Headphones",
    price: 99,
    imgsrc: "https://havitstore.pk/cdn/shop/files/H2590.1596_1.png?v=1719232522"
  },
  {
    name: "Smart Watch",
    price: 149,
    imgsrc: "https://media.wisemarket.com.pk/product/bml-bw8-wearfit-pro-ultra-smart-watch-57.webp"
  },
  {
    name: "Lap Top",
    price: 500,
    imgsrc: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/05/framework-laptop-2.png"
  }
]
function App() {
const useselect=useSelector(())
  return (
    <>
    
    </>
  )
}

export default App
