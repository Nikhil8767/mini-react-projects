import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <Header/>
      <h1>hey i am excited to learn react </h1>
      <ol>
        <li>this is the react landing page and it  </li>
      </ol>
    </div>
    </>
  )
}


export default App
