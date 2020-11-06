function registerAction(userData, cb) {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(user => {
      const currentUser = getState().usersReducer.users
      const newUsers = currentUser.concat(user)
      dispatch({
        type: "FETCH_USERS",
        payload: newUsers
      })
      cb(true)
    })
    .catch(err => console.log(err))
  }
}

export default registerAction