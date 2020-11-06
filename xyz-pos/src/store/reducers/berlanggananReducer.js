let initialState = {
  data: []
}

function berlanggananReducer(state = initialState, action){
  switch(action.type){
    case "FETCH_BERLANGGANAN":
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default berlanggananReducer