'use server'

import { User } from "@/models/logic/user.model"
import { backRoutes } from "@/models/routing/routes.model"
import axios from "axios"

export const getUserData = async (userName: string) => {
    try {
        const userFound = await axios.get<User>(backRoutes.dynamic.user(userName))
        return userFound.data
    } catch {}

    return null
}