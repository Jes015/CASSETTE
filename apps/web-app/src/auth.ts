import { User } from "@/models/logic/user.model"
import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (authorize) => {
                let user: User = null;
                return {}
            }
        })
    ],
})