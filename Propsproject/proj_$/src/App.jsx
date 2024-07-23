import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Contact } from './Contact'
import './App.css'
import { Heading } from './Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heading/>
     <Contact
      image="download.jpeg"
      location="Agra"
      name="Taj Mahal"
      date="12 jan,2025 - 24 jan,2025"
      detail="Taj mahal is a memory of love. Have a trip with your love and make a memory of love
            .So visit now the one of the seven astonishing monument in the world ."
     />
     <Contact
      image="ajanta.jpeg"
      location="south"
     />
    </>
  )
}

export default App
