import React from 'react'
import  './index.css'

export const Header = () => {
  return (
      <header>
             <nav> <img src="./react-logo.png" alt="pic" />
             <ul className='navbar'>
              <li>read</li>
              <li>write</li>
              <li>control</li></ul></nav>
      </header>
  )
}

