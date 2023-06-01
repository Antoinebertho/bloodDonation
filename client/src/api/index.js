import axios from "axios";

const axiosInstance = async(method, endPoint, payload) => {
  try {
    const response = await axios(
        {
          method,
          url    : endPoint,
          data   : payload,
          headers: {
            authorization: `bearer ${ localStorage.getItem("token") }`
          }
        }
    )
    return response.data
  } catch ( error ) {
    return error
  }
}

export default axiosInstance