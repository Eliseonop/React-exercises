import React from 'react'
import { connect } from 'react-redux'
import { httpRequest } from '../../store/actions/asyncActions'
import LoginForm from '../pure/LoginForm'

const mapStateToProps = state => ({
  loged: state.userState.loged,
  fetching: state.userState.fetching
})

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => {
      const data = {
        email: email,
        password: password
      }
      const url = 'http://reqres.in/api/login'
      dispatch(httpRequest('POST', url, data))
    }
  }
}
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
export default LoginFormContainer
