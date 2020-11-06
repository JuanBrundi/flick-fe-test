import checkEmail from './checkEmail'
import checkName from './checkName'
import checkPassword from './checkPassowrd'

const registerValidation = ({nama, email, password}) => {
  const isEmailValid = checkEmail(email)
  const isNameValid = checkName(nama)
  const isPasswordValid = checkPassword(password)
  
  let errors = ''

  !isEmailValid && (errors += `Invalid Email format.\n`)
  !isNameValid && (errors += `Name must only contain alphanumeric and space.\n`)
  !isPasswordValid && (errors += `Password must be minimum 8 character and maximum 20 character.\n`)

  return errors
}

export default registerValidation