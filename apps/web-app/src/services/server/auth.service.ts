'use server'
import { SignInSchema } from "@/app/auth/sign-in/components/SignInForm"
import { SignUpSchema } from "@/app/auth/sign-up/components/SignUpForm"
import { signIn, signOut } from "@/auth"
import { SignInUserSession } from "@/models/logic/user.model"
import { backRoutes, frontRoutes } from "@/models/routing/routes.model"
import axios from "axios"

export const checkSession = async () => {
    try {
        await axios.get(backRoutes.static.auth.subRoutes.sessionCheckPoint.path)
    } catch {
        signOut()
    }
}

// AUTH.JS V5 SUCKSSSSS FOREVEEEER
export const signInService = async (data: SignInSchema) => {
    let response = {
        statusCode: 500,
        message: 'Something went wrong',
    }

    try {
        await signIn('credentials', { ...data, redirect: false, redirectTo: '' })
        response.statusCode = 201
        response.message = 'Success'
    } catch {
        response.statusCode = 401
        response.message = 'Bad credentials'
    }
    return response
}

export const signUpService = async (data: SignUpSchema) => {
    let response = {
        statusCode: 500,
        message: 'Something went wrong',
    }


    try {
        await axios.post<SignInUserSession>(backRoutes.static.auth.subRoutes.signUp.path, data)

        response = await signInService({ email: data.email, password: data.password })

    } catch {
        response.statusCode = 409
        response.message = 'Username or email already exits'
    }
    return response
}

export const signOutService = async (direction: 'home' | 'sign-in') => {
    return await signOut({ redirectTo: direction === 'home' ? frontRoutes.static.home.path : frontRoutes.static.auth.subRoutes.signIn.path, redirect: true })
}