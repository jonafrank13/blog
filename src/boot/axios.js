import Vue from 'vue'
import axios from 'axios'
import { Notify } from 'quasar'

function responseErrorHandler (error) {
  // Common error handler
  if (error.response) {
    Notify.create({
      type: 'negative',
      caption: 'API error',
      message: error.response.data.message
    })
    console.error(error.response)
    // return Promise.reject(error)
  }
}

// apply all response interceptors here
axios.interceptors.response.use(
  response => response,
  responseErrorHandler
)

Vue.prototype.$axios = axios

export { axios }
