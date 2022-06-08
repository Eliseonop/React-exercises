import React, { useReducer, useContext } from 'react'

//Action Types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const mycontext = React.createContext()

const Points = () => {
  const { state } = useContext(mycontext)
  return (
    <div>
      <h1>Points: {state.count}</h1>
    </div>
  )
}

export default function Counter () {
  // Initial state
  const initialState = {
    count: 0
  }
  //Reducer to change State
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + action.payload.quantity
        }
      case DECREMENT:
        return {
          ...state,
          count: state.count - action.payload.quantity
        }
      case RESET:
        return {
          ...state,
          count: 0
        }
      default:
        return state
    }
  }
  //Asign userReducer to state
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <mycontext.Provider value={{ state, dispatch }}>
      <div>
        <Points />
        {/* <h2>Conunter :</h2>
        <p>{state.count}</p> */}

        <button
          onClick={() =>
            dispatch({
              type: INCREMENT,
              payload: {
                quantity: 3
              }
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: DECREMENT,
              payload: {
                quantity: 2
              }
            })
          }
        >
          Decrement
        </button>
        <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      </div>
    </mycontext.Provider>
  )
}
