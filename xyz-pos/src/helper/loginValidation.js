import checkEmail from './checkEmail'
import checkPassword from './checkPassowrd'

const loginValidation = (email, password) => {
  const isEmailValid = checkEmail(email)
  const isPasswordValid = checkPassword(password)
  
  let errors = ''

  !isEmailValid && (errors += `Invalid Email format.\n`)
  !isPasswordValid && (errors += `Password must be minimum 8 character and maximum 20 character.\n`)

  return errors
}

export default loginValidation