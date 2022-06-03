import React from 'react'

export function AsyncExample () {
  async function generateNumber () {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.random())
      }, 1000)
    })
  }
  function obtainNumber () {
    generateNumber().then(number => {
      console.log(number)
    })
  }
  async function saveSessionStorage (key, value) {
    try {
      await sessionStorage.setItem(key, value)
      return Promise.resolve(sessionStorage.getItem(key))
    } catch (error) {
      console.log(error)
    }
  }
  function showStorage () {
    saveSessionStorage('name', 'Eliseo')
      .then(res => {
        alert(`Saved Name: ${res}`)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        alert('Finally')
      })
  }
  async function obtainMessage () {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello  world')
      }, 2000)
    })
    let message = await promise

    await alert(`Message received: ${message}`)
  }
  const returnError = async () => {
    await Promise.reject(new Error('Error Opps'))
  }
  const consumeError = () => {
    returnError()
      .then(res => {
        alert(`Message received: ${res}`)
      })
      .catch(err => {
        alert(`Error: ${err}`)
      })
      .finally(() => {
        alert('Finally')
      })
  }

  const urlNotFound = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      alert(`Response: ${response}`)
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }
  const multiplePromises = async () => {
    let results = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1'),
      fetch('https://jsonplaceholder.typicode.com/todos/2'),
      fetch('https://jsonplaceholder.typicode.com/todos/3')
    ])
      .then(responses => {
        return Promise.all(responses.map(response => response.json()))
      })
      .then(results => {
        return results.map(result => result.title)
      })
      .then(titles => {
        return titles.map(title => console.log(title))
      })
      .catch(err => {
        alert(`Error: ${err}`)
      })
  }

  return (
    <div>
      AsyncExample
      <button onClick={obtainNumber}>obtainNumber</button>
      <button onClick={showStorage}>showStorage</button>
      <button onClick={obtainMessage}>Recived message in 2 secons</button>
      <button onClick={consumeError}>Consume Error</button>
      <button onClick={urlNotFound}>Url Not Found</button>
      <button onClick={multiplePromises}>Multiple Promises</button>
    </div>
  )
}
