import axios from 'axios'
import { getUnsplashPhotosI } from 'src/interfaces/request.interfaces'

const headers = {
  'Content-Type': 'application/json',
}

const getBaseURL = () => {
  let baseURL = process.env.REACT_APP_API
  return baseURL
}

export const getPhotos = async (params: getUnsplashPhotosI) => {
  try {
    const response = await axios({
      headers: { ...headers },
      baseURL: getBaseURL(),
      url: '/photo',
      method: 'GET',
      params: { ...params },
    })
    return response.data.response
  } catch (error) {
    return { results: [] }
  }
}
