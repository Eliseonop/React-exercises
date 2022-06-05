let nextTodoId = 0
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/**
 *
 * @param {string} text
 * @returns actions ADD_TODO
 */
export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

/**
 *
 * @param {number} id
 * @returns action TOGGLE_TODO
 */
export const toggletodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}

/**
 *
 * @param {string} filter
 * @returns  action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter
    }
  }
}
