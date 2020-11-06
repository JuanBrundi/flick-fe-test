let initialState = {
  info: []
}

function infoReducer(state = initialState, action){
  switch(action.type){
    case "FETCH_INFO":
      return {
        ...state,
        info: action.payload
      }
    default:
      return state
  }
}

export default infoReducer