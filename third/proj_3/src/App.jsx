import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Contact } from './Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact
        image="dog1.jpeg"
        name="flying jat"
        phone="4644654"
        email="mr.whisaz@cat"
      
      
      
      />
      <Contact
         image="call.png"
         name="flying jat"
         phone="4644654"
         email="mr.whisaz@cat"
      />
      <Contact
         image="mail.png"
         name="flying jat"
         phone="4644654"
         email="mr.whisaz@cat"
      />
      <Contact
         image="jdssd"
         name="flying jat"
         phone="4644654"
         email="mr.whisaz@cat"
      />
    </>
  )
}

export default App
