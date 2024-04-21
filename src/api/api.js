import axios from 'axios'
import apiUrl from '../lib/config'

export const api = axios.create({
  baseURL: apiUrl
})
