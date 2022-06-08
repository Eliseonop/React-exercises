import React, { createContext, useReducer } from 'react'

//Actions
const CREATE = 'CREATE'
const COMPLETED = 'COMPLETED'
const DELETE = 'DELETE'
const FILTER = 'FILTER'
//Initial State
const initialState = {
  tasks: [{ id: 1, title: 'Task 1', completed: false }]
}
//Reducer to change State
const taskReducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return { ...task, completed: !task.completed }
          }
          return task
        })
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
    <TaskListContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskListContext.Provider>
  )
}
