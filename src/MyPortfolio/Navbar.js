import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div >
      <nav className="navbar">
          <div className="nav-left">
              <img src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" alt=""/>
              <input type="text" placeholder="Search"/>
          </div>
          <div className="nav-center">
              <a href="">Home</a>
              <a href="">My academics</a>
              <a href="">My Road to developer</a>
              <a href="">My Projetcs</a>  
          </div>
          <div className="nav-right">
              <a href="">Leave a comment. Or suggestions</a>
              
          </div>
      </nav>
    </div>
  )
}

export default Navbar
