import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/random',
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})
