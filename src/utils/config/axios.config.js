import axios from 'axios'

//Default config AXIOS

export default axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})
