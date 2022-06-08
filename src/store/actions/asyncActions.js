//LA PRIMERA SERA ESCUCHADA POR EL SAGA LISTENS
export const API_CALL_REQUEST = 'API_CALL_REQUEST'
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'
export const API_CALL_FAILURE = 'API_CALL_FAILURE'

export const login = (email, password) => {
  return {
    type: API_CALL_REQUEST,
    payload: {
      request: {
        method: 'POST',
        url: 'http://reqres.in/api/login',
        data: {
          email: email,
          password: password
        }
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE
    }
  }
}

/**
 *
 * }Generic http request Acttion
 * @returns
 */
export const httpRequest = (method, url, data, okAction, failAction) => {
  return {
    type: API_CALL_REQUEST,
    payload: {
      request: {
        method: method,
        url: url,
        data: data
      },
      okAction: okAction,
      failAction: failAction
    }
  }
}
