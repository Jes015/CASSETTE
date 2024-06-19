import { DefaultSession } from "next-auth"
import { User } from "./user.model"

export interface UserSession {
    user: User & DefaultSession["user"]
    token: string
}