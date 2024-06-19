import axios from "axios"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { SignInUserSession, User } from "./models/logic/user.model"
import { backRoutes } from "./models/routing/routes.model"

declare module 'next-auth' {

    interface User extends SignInUserSession {
    }

    interface Session {
        user: SignInUserSession
    }
}

// AUTH.JS V5 SUCKSSSSS FOREVEEEER
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: 'email-password',
            type: 'credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                let user: SignInUserSession | null = null

                try {
                    const authData = {
                        email: String(credentials.email),
                        password: String(credentials.password)
                    }

                    const response = await axios.post<SignInUserSession>(backRoutes.static.auth.signIn.path, authData)

                    if (response.data) {
                        user = response.data
                    }

                } catch (error: any) {
                    if ('response' in error && 'data' in error.response) {
                        console.log({ error: error.response.data })
                    }
                }

                return user
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.userSession = user.user
                token.token = user.token
            }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    user: token?.userSession as User,
                    token: token?.token as string
                }
            }
        }
    },
})