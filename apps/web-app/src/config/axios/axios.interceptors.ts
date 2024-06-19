'use server'
import { auth, signOut } from '@/auth'
import { frontRoutes } from '@/models/routing/routes.model'
import axios, { isAxiosError, type InternalAxiosRequestConfig } from 'axios'

export const setUpInterceptors = async () => {
    axios.interceptors.request.use(
        async (request: InternalAxiosRequestConfig) => {
            const session = await auth()
            request.headers.Authorization = `Bearer ${session?.token}`

            return request
        },
        async (responseError) => await Promise.reject(responseError)
    )

    axios.interceptors.response.use(
        async (response) => response,
        async (responseError) => {
            if (isAxiosError(responseError)) {
                if (responseError.response?.data.statusCode === 401 || responseError.response?.status === 401) {
                    await signOut({ redirectTo: frontRoutes.static.home.path, redirect: true })
                }
            }
            return await Promise.reject(responseError)
        }
    )
}
