import React, { useState } from 'react'

export default function LoginUseState () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      await function login ({ username, password }) {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (username === 'admin' && password === 'admin') {
              resolve()
            } else {
              reject()
            }
          }, 1000)
        }).then(() => {
          setIsLoggedIn(true)
        })
        setIsLoading(false)
      }
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }
  const logout = () => {
    setIsLoggedIn(false)
    setIsLoading(false)
    setError('')
  }
  return (
    <div>
      LoginUseState
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
                onChange={e => setUsername(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button type='submit'>
                {isLoading ? 'Loading...' : 'Login'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
