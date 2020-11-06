import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import './Register.css'
import loginAction from '../../../../store/actions/loginAction'
import loginValidation from '../../../../helper/loginValidation'
import Swal from 'sweetalert2'

function Register({isRegister, handleIsRegister, moveFromRegisterToLogin}) {
  const dispatch = useDispatch()
  const history = useHistory()
  
  const [display, setDisplay] = useState('hide-login')
  const [closeLogin, setCloseLogin] = useState('')
  const [loginInput, setLogin] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    isRegister ? setDisplay('') : setDisplay('hide-login')
    isRegister ? setCloseLogin('') : setCloseLogin('close-login')
  }, [isRegister])

  useEffect(() => {
    dispatch(loginAction())
  }, [dispatch])

  const {users} = useSelector(state => state.usersReducer)

  const closeLoginBox = () => {
    setCloseLogin('close-login')
    setTimeout(() => {
      handleIsRegister(false)
    }, 500)
  }

  const handleInput = (e) => {
    const {name, value} = e.target
    setLogin({...loginInput, [name]: value})
  }

  const handleDaftar = () => {
    const {email, password} = loginInput
    if(email.trim() == "" || password.trim() == ""){
      Swal.fire({
        icon: 'error',
        title: 'Opps... Fail To Register',
        text: 'Please fill in all the fields',
      })
    } else {
      const errors = loginValidation(email, password)

      if(errors == ''){
        let isNotAuth = true
        for(const user in users){
          if(users[user].email === email && users[user].password === password){
            isNotAuth = false
            history.push("/dashboard")
          }
        }
        isNotAuth && Swal.fire({
          icon: 'error',
          title: 'Opps... Fail To Register',
          text: 'Invalid Email/password'
        })
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
            <h3>Masuk</h3>
          </div>
          <div className="login login-input-email">
            <img src="/Assets/email-24px.svg" alt="..."/>
            <input onChange={handleInput} name="email" type="email" placeholder="Email" />
          </div>
          <div className="login login-input-password">
            <img src="/Assets/password-24px.svg" alt="..."/>
            <input onChange={handleInput} name="password" type="password" placeholder="Password" />
          </div>
          <div className="login-button">
            <button onClick={handleDaftar}>Daftar</button>
          </div>
          <div>
            <p>Sudah punya akun? <span className="register-masuk" onClick={moveFromRegisterToLogin}>Masuk</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
