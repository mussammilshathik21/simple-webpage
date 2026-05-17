import React from 'react'
import "./navbar.css"
import { FaYoutube } from "react-icons/fa6";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'><h2>ShaCodes</h2></div>
        <div className='youtube'> <a href="https://www.youtube.com/@shacodes-f5n"><FaYoutube color="#d60808" size="35px"/></a></div>
    </div>
    
  )
}

export default Navbar; 