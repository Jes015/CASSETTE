'use server'

import { auth, update } from "@/auth"
import { User, UserPartial } from "@/models/logic/user.model"
import { backRoutes } from "@/models/routing/routes.model"
import axios from "axios"

export const getUserData = async (userName: string) => {
    try {
        const userFound = await axios.get<User>(backRoutes.dynamic.user(userName))
        return userFound.data
    } catch { }

    return null
}

export const updateUserDataService = async (newUserData: UserPartial) => {
    const sessionUpdated = await auth()

    if (sessionUpdated != null) {
        sessionUpdated.user.user = {
            ...sessionUpdated?.user.user,
            ...newUserData
        }
    }

    try {
        await axios.patch<User>(backRoutes.static.user.path, newUserData)
        await update(sessionUpdated!)
        return { statusCode: 200, message: 'User updated' }
    }
    catch {
        return { statusCode: 500, message: 'Something went wrong updating the user' }
    }
}