import React from 'react'

const LoginButton = ({ loginAction }) => (
  <button onClick={loginAction}>Login</button>
)
const LogoutAction = ({ logoutAction }) => (
  <button onClick={logoutAction}>Logout</button>
)
export default function OptinoalRender () {
  const [access, setAccess] = React.useState(false)
  const [nMessages, setNMessages] = React.useState(2)
  const loginAction = () => {
    setAccess(true)
  }
  const logoutAction = () => {
    setAccess(false)
  }

  //   const updateAccess = () => {
  //     setAccess(!access)
  //   }
  let optionalButton
  if (access) {
    optionalButton = <LogoutAction logoutAction={logoutAction} />
  } else {
    optionalButton = <LoginButton loginAction={loginAction} />
  }

  let addMessages = () => {
    setNMessages(nMessages + 1)
  }

  return (
    <div>
      <h1>Optional Render</h1>
      {optionalButton}

      {nMessages > 0 && <p>You have {nMessages} new messages</p>}
      {access ? <p>You are logged in</p> : <p>You are not logged in</p>}
    </div>
  )
}
