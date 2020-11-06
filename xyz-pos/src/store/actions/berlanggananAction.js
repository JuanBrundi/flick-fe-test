function berlanggananAction() {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/berlangganan")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "FETCH_BERLANGGANAN",
        payload: data
      })
    })
    .catch(err => console.log(err))
  }
}

export default berlanggananAction