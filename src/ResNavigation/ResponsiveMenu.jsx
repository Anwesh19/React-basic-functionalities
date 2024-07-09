import React, { useState } from 'react'
import './style.css'

const ResponsiveMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <button className='menu-icon' onClick={toggleMenu}>
            menu
        </button>
        <ul className={`menu ${isOpen?'open':''}`}>
            <li>home</li>
            <li>about</li>
            <li>service</li>
            <li>contact</li>
        </ul>
    </div>
  )
}

export default ResponsiveMenu