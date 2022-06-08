import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { API_CALL_REQUEST } from '../actions/asyncActions'

//Wathcher SAGA
//Listen the API_CALL_REQUEST action
export function * watcherSaga () {
  yield takeEvery(API_CALL_REQUEST, workerSaga)
}

export function * workerSaga (action) {
  try {
    const response = yield call(fetchHttp(action.payload.request))
    const token = response.data.token

    yield put({ type: action.payload.okAction, payload: token })
  } catch (error) {
    yield put({ type: action.payload.failAction, payload: error })
  }
}

function fetchHttp (request) {
  return function () {
    return axios(request)
  }
}
