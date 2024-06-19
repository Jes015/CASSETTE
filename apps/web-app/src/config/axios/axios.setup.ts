'use server'
import { setUpInterceptors } from './axios.interceptors'

export const setUpAxios = async () => {
  setUpInterceptors()
}