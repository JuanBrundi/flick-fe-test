import React, {useState, useEffect} from 'react'

// Sections
import HeroSection from "./section/hero/index"
import Berlangganan from "./section/berlangganan/index"

// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function Main() {
  const [isLogin, setIsLogin] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  const handleIsLogin = (input) => {
    setIsLogin(input)
  }
  const handleIsRegister = (input) => {
    setIsRegister(input)
  }
  const moveFromLoginToRegister = () => {
    setIsLogin(false)
    setIsRegister(true)
  }
  const moveFromRegisterToLogin = () => {
    setIsLogin(true)
    setIsRegister(false)
  }
  return (
    <div style={{position: "relative"}}>
        {/* Login */}
        <Login moveFromLoginToRegister={moveFromLoginToRegister} isLogin={isLogin} handleIsLogin={handleIsLogin}/>
        <Register moveFromRegisterToLogin={moveFromRegisterToLogin} handleIsRegister={handleIsRegister} isRegister={isRegister}/>
      <div>

        {/* Navigation Bar */}
        <div>
          <Navbar handleIsRegister={handleIsRegister}/>
        </div>

        {/* Hero Section */}
        <div>
          <HeroSection handleIsLogin={handleIsLogin}/>
        </div>

        {/* Berlangganan Section */}
        <div>
          <Berlangganan />
        </div>

        {/* Footer */}
        <div>
          <Footer />
        </div>

        {/* Login Modal */}
      </div>
    </div>
  )
}

export default Main
