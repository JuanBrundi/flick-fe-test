let initialState = {
  table: []
}

function tableReducer(state = initialState, action){
  switch(action.type){
    case "FETCH_TABLE":
      return {
        ...state,
        table: action.payload
      }
    default:
      return state
  }
}

export default tableReducer