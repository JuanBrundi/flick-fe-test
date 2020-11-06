import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'

import './Login.css'
import registerValidation from '../../../../helper/RegisterValidation'
import Swal from 'sweetalert2'
import registerAction from '../../../../store/actions/registerAction'

function Login({isLogin, handleIsLogin, moveFromLoginToRegister}) {
  const dispatch = useDispatch()
  const [display, setDisplay] = useState('hide-login')
  const [closeLogin, setCloseLogin] = useState('')
  const [registerInput, setRegister] = useState({
    nama: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    isLogin ? setDisplay('') : setDisplay('hide-login')
    isLogin ? setCloseLogin('') : setCloseLogin('close-login')
  }, [isLogin])

  const closeLoginBox = () => {
    setCloseLogin('close-login')
    setTimeout(() => {
      handleIsLogin(false)
    }, 500)
  }

  const handleInput = (e) => {
    const {name, value} = e.target
    setRegister({...registerInput, [name]: value})
  }

  const handleDaftar = () => {
    const {nama, email, password} = registerInput
    if(nama.trim() == "" || email.trim() == "" || password.trim() == ""){
      Swal.fire({
        icon: 'error',
        title: 'Opps... Fail To Register',
        text: 'Please fill in all the fields',
      })
    } else {
      const errors = registerValidation(registerInput)

      if(errors == ''){
        dispatch(registerAction(registerInput, (res) => {
          if(res){
            setCloseLogin('close-login')
            setTimeout(() => {
              handleIsLogin(false)
            }, 500)
          }
        }))
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Opps... Fail To Register',
          text: errors
        })
      }
    }
  }
  
  return (
    <div className={`login-container ${display}`}>
      <div className={`login-box ${closeLogin}`}>
        <div className="left-content">
          <img src="/Assets/login-illustration.svg" alt="..."/>
        </div>
        <div className="right-content">
          <div className="close-sign" onClick={closeLoginBox}>
            <img src="/Assets/close-24px.svg"  alt="..."/>
          </div>
          <div>
            <h3>Buat Akun</h3>
          </div>
          <div className="login login-input-name">
            <img src="/Assets/face-24px.svg" alt="..."/>
            <input onChange={handleInput} type="text" name="nama" placeholder="Nama" />
          </div>
          <div className="login login-input-email">
            <img src="/Assets/email-24px.svg" alt="..."/>
            <input onChange={handleInput} type="email" name="email" placeholder="Email" />
          </div>
          <div className="login login-input-password">
            <img src="/Assets/password-24px.svg" alt="..."/>
            <input onChange={handleInput} type="password" name="password" placeholder="Password" />
          </div>
          <div className="login-button">
            <button onClick={handleDaftar}>Daftar</button>
          </div>
          <div>
            <p>Sudah punya akun? <span className="register-masuk" onClick={moveFromLoginToRegister}>Masuk</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
