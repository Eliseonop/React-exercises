import axiosConfig from '../config/axios.config'

export function getRamdomJokes () {
  return axiosConfig.get('/', {
    validateStatus: function (status) {
      return status < 500
    }
  })
}
