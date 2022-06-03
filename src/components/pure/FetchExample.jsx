import React, { useState, useEffect } from 'react'
import {
  getAllPages,
  getAllUsers,
  getUserDetails,
  login
} from '../../services/fetchService'
export default function FetchExample () {
  const [users, setUsers] = useState([])
  const [setectedUser, setSelectedUser] = useState({})
  const [totalUsers, setTotalUsers] = useState(12)
  const [userPerPage, setUserPerPage] = useState(6)
  const [pages, setPages] = useState(2)

  useEffect(() => {
    obtainUsers()
  }, [])
  console.log('users', users)
  const obtainUsers = () => {
    getAllUsers()
      .then(res => {
        if (res.status === 200 && res.ok) {
          res.json().then(body => {
            setUsers(body.data)
            setPages(body.total_pages)
            setUserPerPage(body.per_page)
            setTotalUsers(body.total)
          })
        }
      })

      .catch(err => {
        console.log(err)
      })
  }
  const obtainPagesUsers = page => {
    getAllPages(page)
      .then(res => {
        setUsers(res.data)
        setTotalUsers(res.total)
        setUserPerPage(res.per_page)
        setPages(res.total_pages)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const obtainUserDetail = id => {
    getUserDetails(id).then(res => {
      setSelectedUser(res.data).catch(err => {
        console.log(err)
      })
    })
  }
  const authUser = () => {
    login('eve.holt@reqres.in', 'cityslicka')
      .then(res => {
        console.log('TOKEN', res.token)
        sessionStorage.setItem('token', res.token)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        console.log('end login')
      })
  }
  return (
    <div>
      FetchExample
      <button className='btn btn-warning' onClick={() => authUser()}>
        Login
      </button>
      <h2>Users:</h2>
      <div className='d-flex flex-wrap justify-content-center'>
        {users ? (
          users.map(user => {
            return (
              <div key={user.id} className='card m-2'>
                <p
                  className='m-2 btn'
                  onClick={() => obtainUserDetail(user.id)}
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt='avatar'
                      className='rounded w-100 h-100'
                    />
                  ) : (
                    <div class='spinner-border m-5' role='status'>
                      <span class=''>Loading...</span>
                    </div>
                  )}
                </p>
                <p className='mt-2 fw-bold'>{user.first_name}</p>
                <p className='mx-3'>{user.email}</p>
              </div>
            )
          })
        ) : (
          <div class='spinner-border m-5' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        )}
        <div className='d-flex flex-column w-100'>
          {setectedUser.id ? (
            <div className='card m-2 '>
              <h2>User seleted</h2>
              <p className='m-2'>
                <img
                  src={setectedUser.avatar}
                  alt='avatar'
                  className='rounded '
                />
              </p>
              <p className='mt-2 fw-bold'>{setectedUser.first_name}</p>
              <p className='mx-3'>{setectedUser.email}</p>
            </div>
          ) : (
            <div className='card m-2 '>
              {/* <p className='m-2'>
                <div className='m-4'></div>
              </p> */}
            </div>
          )}
        </div>

        <div className='d-block justify-content-center'>
          <p>
            Showing {userPerPage} users of {totalUsers}
          </p>
          <button
            className='btn btn-primary'
            onClick={() => obtainPagesUsers(1)}
          >
            page 1
          </button>
          <button
            className=' mx-2 btn btn-success'
            onClick={() => obtainPagesUsers(2)}
          >
            page 2
          </button>
        </div>
      </div>
    </div>
  )
}
