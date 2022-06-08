import { combineReducers } from 'redux'
import { filterReducer } from './filterReduce'
import { todosReducer } from './todosReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  //state name : reducer that will control
  todosState: todosReducer,
  filterState: filterReducer,
  //Async example (LOGIN USER )
  userState: userReducer
})
