function loginAction() {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => {
      dispatch({
        type: "FETCH_USERS",
        payload: users
      })
    })
    .catch(err => console.log(err))
  }
}

export default loginAction