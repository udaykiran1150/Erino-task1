import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api/v1',
  withCredentials: true,
})

let isRefreshing = false
let failedQueue: Array<{ resolve: (value?: any) => void; reject: (reason?: any) => void }> = []

const processQueue = (error: any, token: any = null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error)
    else p.resolve(token)
  })
  failedQueue = []
}

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config

    if (
      err.response &&
      err.response.status === 401 &&
      err.response.data?.message === 'access_token_expired' &&
      !original._retry
    ) {
      if (isRefreshing) { 
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject })
        }).then(() => api(original))
      }

      original._retry = true
      isRefreshing = true

      try {
        await api.get('api/auth/refresh')
        processQueue(null, true)
        return api(original)
      } catch (refreshErr) {
        processQueue(refreshErr, null)
        // force logout
         
        window.location.href = '/sign-in'
        return Promise.reject(refreshErr)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(err)
  }
)

export default api
