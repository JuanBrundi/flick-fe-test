import React from 'react'

import './index.css'

function HeroSection({handleIsLogin}) {
  return (
    <div className="hero-container">
      {/* Left Content */}
      <div className="hero-left-content">
        <div className="hero-left-content-full-title">
          <span className="hero-left-content-title">Solusi terbaik untuk</span>
          <span className="hero-left-content-title inline-text">mengelola usaha</span>
          <span className="hero-left-content-title">kamu!</span>
        </div>
        <div className="btn-left-content">
          <button onClick={() => handleIsLogin(true)} className="left-content-btn daftar">Daftar Sekarang</button>
          <a href="#pelajari" className="left-content-btn pelajari"><span>Pelajari Dulu!</span></a>
        </div>
      </div>

      {/* Right Content */}
      <div>
        <img src="/Assets/hero-section-illustration.svg" alt="..."/>
      </div>
    </div>
  )
}

export default HeroSection
