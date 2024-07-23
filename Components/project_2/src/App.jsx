import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Heading } from './Heading.jsx'
import { Navbar } from './Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <Navbar/>
     <Heading/>    </>
  )
}

export default App
