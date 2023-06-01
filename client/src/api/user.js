import axiosInstance from './index.js'
export const loginUser           = (payload) => {
  return axiosInstance("post", "/api/v1/users/login", payload)
}
export const registerUser        = (payload) => {
  return axiosInstance("post", "/api/v1/users/register", payload)
}
export const getLoggedInUserInfo = () => {
  return axiosInstance("post", "/api/v1/users/get-user-info")
}