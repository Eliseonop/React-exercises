import React from 'react'
import ReactDOM from 'react-dom'

// Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// ! Importante: los estilos propios, deben ir debajo del bootstrap para que no los pise.
import './index.css'

import App from './App'
import reportWebVitals from './reportWebVitals'
// Inport config function of App Store
import { createAppStore, creaAppAsyncStore } from './store/config/storeConfig'
import { Provider } from 'react-redux'
import AppReduxSaga from './AppReduxSaga'

// let appStore = createAppStore()
let appAsyncStore = creaAppAsyncStore()

ReactDOM.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
