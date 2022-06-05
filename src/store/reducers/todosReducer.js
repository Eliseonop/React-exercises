//Initial TodosState
//Initialy todos is empy array
import { ADD_TODO, TOGGLE_TODO } from '../actions/actions'

let initialState = []

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })

    default:
      return state
  }
}
