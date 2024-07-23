import React from 'react'
import './index.css'

export const Contact = (props) => {
    console.log(props);
  return (
   <>
    <div>
        <div className="contact-card">
            <img src={props.image} alt="dog image" />
            <h3>{props.name}</h3>
            <div className="infogroup">
                <img src="call.png" alt="" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="mail.png" alt="" />
                <p>{props.email}</p>
            </div>
        </div>
    </div>
   </>
  )
}
