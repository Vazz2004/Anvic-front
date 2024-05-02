import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://avic-back.azurewebsites.net'
})
