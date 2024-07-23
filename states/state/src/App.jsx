import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [isImportant,setIsImportant]=React.useState("yes")
  const[count,setValue]=React.useState(0);



  // function handleClick(){
  //     setIsImportant("no")
  // }
  function add(){
    // setValue(count+1)//istead of this we can use the precount value
    setValue(precount=>precount+1)
  }
  function sub(){
    setValue(precount=>precount-1)
  }

  return (
    <>
     {/* <div onClick={handleClick}>
      <h1>{isImportant}</h1>
     </div> */}
     <div>
      <h1>{count}</h1>
      <button onClick={sub}>-</button>
      <button onClick={add}>+</button>
     </div>


    </>
  )
}

export default App
