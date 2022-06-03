import { async } from 'rxjs'

export const getAllUsers = async () => {
  try {
    let response = await fetch('https://reqres.in/api/users')
    console.log('responset', response)
    return response
  } catch (error) {
    console.log('error', error)
  }
}

export const getAllPages = async page => {
  try {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    console.log('responset', response)
    return response.json()
  } catch (error) {
    console.log('error', error)
  }
}
export const getUserDetails = async id => {
  try {
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    console.log('responset', response)
    return response.json()
  } catch (error) {
    console.log('error', error)
  }
}
export const login = async (email, password) => {
  let body = {
    email: email,
    password: password
  }
  let response = await fetch('https://reqres.in/api/login', {
    methos: 'POST',
    // mode: 'no-cors',
    // credentials: 'omit',
    // cache: 'no-cache',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    body: JSON.stringify(body)
  })
  console.log('response', response)
  console.log(('response', response.status))
  console.log('OK', response.ok)

  return response.json()
}
