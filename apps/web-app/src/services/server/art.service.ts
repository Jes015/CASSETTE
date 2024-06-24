'use server'
import { ArtEntityArray, FeaturedArt } from "@/models/logic/art.model"
import { backRoutes } from "@/models/routing/routes.model"
import axios from "axios"
import { UUID } from "crypto"

export const getUserArts = async (userId: UUID): Promise<ArtEntityArray> => {
    const arts = await axios.get<ArtEntityArray>(backRoutes.dynamic.art.subRoutes.user.base(userId))

    return arts.data ?? []
}

export const getFeaturedUserArts = async (userId: UUID): Promise<FeaturedArt> => {
    const userPath = backRoutes.dynamic.art.subRoutes.user.subRoutes.featured(userId)
    try {
        const featuredUserArts = await axios.get<FeaturedArt>(userPath)
        return featuredUserArts.data
    } catch {}

    return { id: null, featuredArts: [] }
}