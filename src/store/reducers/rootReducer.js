import { combineReducers } from 'redux'
import { filterReducer } from './filterReduce'
import { todosReducer } from './todosReducer'

export const rootReducer = combineReducers({
  //state name : reducer that will control
  todosState: todosReducer,
  filterState: filterReducer
})
