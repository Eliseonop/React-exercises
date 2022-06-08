import React, { useReducer } from 'react'

//Actions
const FIELD = 'FIELD'
const LOGIN = 'LOGIN'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'
const LOGOUT = 'LOGOUT'
//Initial State
const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false
}
//Reducer to change State
const loginReducer = (state, action) => {
  switch (action.type) {
    case FIELD:
      return {
        ...state,
        [action.fieldName]: action.payload
      }
    case LOGIN:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ''
      }
    case ERROR:
      return {
        ...state,
        error: 'Invalid Credentials',
        isLoading: false,
        isLoggedIn: false,
        username: '',
        password: ''
      }
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: '',
        password: ''
      }
    default:
      return state
  }
}

export default function LoginUseReducer () {
  const [state, dispatch] = useReducer(loginReducer, initialState)
  //Obtain all variable from state
  const { username, password, isLoading, error, isLoggedIn } = state

  //handle submit
  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({ type: LOGIN })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          resolve()
        } else {
          reject()
        }
      }, 1000)
    })
      .then(() => {
        dispatch({ type: SUCCESS })
      })
      .catch(() => {
        dispatch({ type: ERROR })
      })
  }
  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  return (
    <div>
      LoginUseReducer
      <div>
        <div>
          {isLoggedIn ? (
            <div>
              <h1>Welcome {username}</h1>
              <button onClick={() => logout()}>Logout</button>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit}>
                {error && <p style={{ colot: 'tomato' }}>{error}</p>}
                <input
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={e =>
                    dispatch({
                      type: FIELD,
                      fieldName: 'username',
                      payload: e.currentTarget.value
                    })
                  }
                />
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={e =>
                    dispatch({
                      type: FIELD,
                      fieldName: 'password',
                      payload: e.currentTarget.value
                    })
                  }
                />
                <button type='submit'>
                  {isLoading ? 'Loading...' : 'Login'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
