import axios from "axios"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { UserSession } from "./models/logic/user.model"
import { backRoutes } from "./models/routing/routes.model"

declare module 'next-auth' {
    interface User extends UserSession {
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user: UserSession | null = null

                try {
                    const authData = {
                        email: String(credentials.email),
                        password: String(credentials.password)
                    }

                    const response = await axios.post<UserSession>(backRoutes.static.auth.signIn.path, authData)
                    
                    user = response.data

                } catch (error: any) {
                    if ('response' in error && 'data' in error.response) {
                        console.log({ error: error.response.data })
                    }
                }


                if (!user) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error("User not found.")
                }

                // return user object with the their profile data
                return user
            },
        }),
    ],
})