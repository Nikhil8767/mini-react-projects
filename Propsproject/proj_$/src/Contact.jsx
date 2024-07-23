import React from 'react'
import "./index.css"

import { FaLocationDot } from "react-icons/fa6";

export const Contact = (props) => {
  return (
    <>
       <main className='main'>

        <div><img src={props.image} alt="tajmahal" /></div>

        <div className='hi'> <p className='para'>
        <FaLocationDot />{props.location}<span className='name'>view on your google maps</span>
        </p>
        <h2 className='nameof'>{props.name}</h2>
        <p className='date'>{props.date}</p>
        <p className='content'>{props.detail}
        </p>
        </div>

       </main>
       
      
    </>
  )
}
