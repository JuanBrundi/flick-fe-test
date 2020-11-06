import React from 'react'
import './Navbar.css'

function Navbar({handleIsRegister}) {
  return (
    <div className="navbar-container">
      <span className="logo-name">xyz<span className="logo-name-pos">POS</span></span>
      <span className="navbar-fitur home-navbar-fitur">Fitur</span>
      <span className="navbar-fitur home-navbar-berlangganan">Berlangganan</span>
      <button className="navbar-fitur home-navbar-btn" type="button" onClick={() => handleIsRegister(true)}>Masuk</button>
    </div>
  )
}

export default Navbar
