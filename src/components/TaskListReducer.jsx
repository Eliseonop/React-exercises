import React, { createContext, useReducer } from 'react'

//Actions
const CREATE = 'CREATE'
const UPDATE = 'UPDATE'
const DELETE = 'DELETE'

//Initial State
const initialState = {
  tasks: []
}
//Reducer to change State
const taskReducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case UPDATE:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      }
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    default:
      return state
  }
}

export const TaskListContext = createContext()

export default function TaskListReducer ({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  return (
    <TaskListContext.Provider value={(state, dispatch)}>
      {children}
    </TaskListContext.Provider>
  )
}
