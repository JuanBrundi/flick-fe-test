function infoAction() {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/info")
    .then(res => res.json())
    .then(info => {
      dispatch({
        type: "FETCH_INFO",
        payload: info
      })
    })
    .catch(err => console.log(err))
  }
}

export default infoAction