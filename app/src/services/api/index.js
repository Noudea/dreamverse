import axios from 'axios'
import { API_URL } from '@env'
import { getDataAsString, storeDataAsString } from '../asyncStorage'

const customAxios = axios.create({
  baseURL: API_URL
})

customAxios.interceptors.request.use(
  async (req) => {
    if (!req.headers.Authorization) {
      const accessToken = await getDataAsString('accessToken')
      if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`
      }
    }
    console.log('axios interceptor request')
    console.log(`${req.method} ${req.url}`)
    return req
  },
  error => Promise.reject(error)
)

customAxios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (response.data.accessToken) {
    storeDataAsString('accessToken', response.data.accessToken)
  }
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error.response.data)
  return Promise.reject(error)
})

export { customAxios }
