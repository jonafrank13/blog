import Vue from 'vue'
import axios from 'axios'
import { Notify } from 'quasar'

function responseErrorHandler (error) {
  // Common error handler
  if (error.response || error) {
    Notify.create({
      type: 'negative',
      caption: 'API error',
      message: error.response ? error.response.data.message : 'Could not reach the servers'
    })
    console.error(error.response)
    return Promise.reject(error)
  }
}

// apply all response interceptors here
axios.interceptors.response.use(
  response => response,
  responseErrorHandler
)

Vue.prototype.$axios = axios

export { axios }
