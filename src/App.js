import { useEffect, useState } from 'react'
import './App.css'
import Jokes from './components/Jokes'
import { Badges } from './components/pure/Badges'
import { getRamdomJokes } from './services/axios.services'
import { Stack } from '@mui/material'

function App () {
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(false)

  const [state, setState] = useState(
    localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state'))
      : {
          view: 1,
          good: 0,
          bad: 0
        }
  )
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])
  const getJokes = async () => {
    setLoading(true)
    getRamdomJokes()
      .then(response => {
        setJokes(response.data)
        setLoading(false)
        setState(prevState => ({
          ...prevState,
          view: prevState.view + 1
        }))
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
      })
      .finally(() => {
        console.log('finally')
      })
  }
  useEffect(() => {
    getJokes()
  }, [])

  return (
    <div className='App'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Stack spacing={2} direction='column' alignItems={'center'}>
          <Badges state={state} setState={setState} />
          <Jokes
            joke={jokes}
            getJokes={() => getJokes()}
            changeState={setState}
          />
        </Stack>
      )}
    </div>
  )
}

export default App
