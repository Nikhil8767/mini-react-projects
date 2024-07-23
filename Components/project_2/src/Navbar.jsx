import React from 'react'
import './index.css'

export const Navbar = () => {
  return (
    
    <nav className='navbar'>
      <img src="reactlogo.png"  alt="img" />
      <h3>React js</h3>
      <ul className='list'>
        <li>read</li>
        <li>create</li>
        <li>update</li>
      </ul>
    </nav>
 )
}
