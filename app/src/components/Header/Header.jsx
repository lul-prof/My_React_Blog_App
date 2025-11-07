import React from 'react'
import  './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-title'>
        <h1>Blog</h1>
      </div>
      <div className='nav-list'>
        <ul>
            <Link to="/">
          
             <li className='active'>
                Home
            </li>
            
            </Link>

            <Link to="/newblog">
            
            <li>
                New Blog
            </li>
          
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header