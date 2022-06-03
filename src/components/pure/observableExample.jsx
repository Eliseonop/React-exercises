import React, { useState } from 'react'
import { getNumbers } from '../../services/ObservableService.js'

export function ObservableExample () {
  const [number, setNumber] = useState(0)

  const obtainNumber = () => {
    console.log('Subscription to bservable')
    getNumbers.subscribe({
      next (number) {
        console.log('New number')
        setNumber(number)
      },
      error (error) {
        console.log(error)
      },
      complete () {
        console.log('complete')
        console.log('Done subscription')
      }
    })
    console.log('Finished subscription')
  }
  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={obtainNumber}>Obtain new NUmber</button>
    </div>
  )
}
