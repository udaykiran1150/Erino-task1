import api from './axiosClient'

export const login = (data: { email: string; password: string }) => api.post('/api/v1/auth/sign-in', data)
export const register = (data: { full_name: string; email: string; password: string }) => api.post('/api/v1/auth/register', data)
export const logout = () => api.post('/api/v1/auth/logout')
export const refresh = () => api.get('/api/v1/auth/refresh')
export const getProfile = () => api.get('/api/v1/auth/profile')
