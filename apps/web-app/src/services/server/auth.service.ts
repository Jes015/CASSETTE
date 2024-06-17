'use server'
import { SignInSchema } from "@/app/auth/sign-in/components/SignInForm"
import { signIn } from "@/auth"

export const signInService = async (data: SignInSchema) => {
    return await signIn('credentials', { ...data, redirect: false })
}