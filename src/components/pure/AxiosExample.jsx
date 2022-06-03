import React, { useEffect, useState } from 'react'
import { getRamdomUsers } from '../../services/axiosService'

export const AxiosExample = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getRamdomUsers()
      .then(res => {
        if (res.status === 200) {
          console.log('res', res)
          setUsers(res.data.results)
        }
      })

      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log('users', users)
  return (
    <div>
      AxiosExample
      <div>
        <div className='card'>
          <div className='card-body'>
            {users.map(user => (
              <div key={user.id}>
                <div>
                  <img src={user.picture.medium} alt='user' />
                </div>
                <div>{user.name.first}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
                <div>{user.gender}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
