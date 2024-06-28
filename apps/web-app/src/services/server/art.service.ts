'use server'
import { ArtEntity, ArtEntityArray, FeaturedArt } from "@/models/logic/art.model"
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
    } catch {
    }

    return { id: null, featuredArts: [] }
}

export const updateArt = async (artListId: UUID, featuredArtListUpdated: ArtEntityArray) => {
    const featuredArtPath = backRoutes.dynamic.art.subRoutes.user.subRoutes.featured(artListId)

    const response = await axios.patch<FeaturedArt>(featuredArtPath, { newArtArray: featuredArtListUpdated })

    console.log(response.data)
}

export const createUserFeaturedArtList = async (art: ArtEntity) => {
    const featuredArtPath = backRoutes.static.art.subRoutes.user.subRoutes.featured.path

    try {
        const response = await axios.post<FeaturedArt>(featuredArtPath, { artIdToAdd: art.id })
        console.log(response.data)
    } catch (error: any) {
        console.log({aa: error.response.data})
    }
}

export const deleteUserFeaturedArt = async () => {

}