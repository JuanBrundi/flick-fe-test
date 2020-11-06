function checkPassword(pwd) {
  const len = pwd.length

  if(len < 8 || len > 20){
    return false
  }
  return true
}

export default checkPassword