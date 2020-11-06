import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './reducers/userReducer'
import berlanggananReducer from './reducers/berlanggananReducer'
import infoReducer from './reducers/infoReducer'
import tableReducer from './reducers/tableReducer'

const reducers = combineReducers({
  usersReducer,
  berlanggananReducer,
  infoReducer,
  tableReducer
})

const middlewares = applyMiddleware(thunk)

const store = createStore(reducers, middlewares)

export default store
