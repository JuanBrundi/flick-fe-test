function infoAction() {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/table")
    .then(res => res.json())
    .then(table => {
      dispatch({
        type: "FETCH_TABLE",
        payload: table
      })
    })
    .catch(err => console.log(err))
  }
}

export default infoAction