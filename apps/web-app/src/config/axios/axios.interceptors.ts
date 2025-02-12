'use server'
import { auth } from '@/auth'
import { frontRoutes } from '@/models/routing/routes.model'
import axios, { isAxiosError, type InternalAxiosRequestConfig } from 'axios'
import { redirect } from 'next/navigation'

export const setUpInterceptors = async () => {
    axios.interceptors.request.use(
        async (request: InternalAxiosRequestConfig) => {
            const session = await auth()
            request.headers.Authorization = `Bearer ${session?.user.token}`

            return request
        },
        async (responseError) => await Promise.reject(responseError)
    )

    axios.interceptors.response.use(
        async (response) => response,
        async (responseError) => {
            if (isAxiosError(responseError)) {
                if (responseError.response?.data.statusCode === 401 || responseError.response?.status === 401) {
                    redirect(frontRoutes.static.auth.subRoutes.signOut.path)
                }
            }
            return await Promise.reject(responseError)
        }
    )
}
