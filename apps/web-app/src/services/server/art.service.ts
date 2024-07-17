'use server'
import { ApiAddFeaturedArt, ArtEntity, ArtEntityArray, FeaturedArt, FeaturedArtArray } from "@/models/logic/art.model"
import { backRoutes } from "@/models/routing/routes.model"
import axios from "axios"
import { UUID } from "crypto"

export const getUserArts = async (userId: UUID): Promise<ArtEntityArray> => {
    const arts = await axios.get<ArtEntityArray>(backRoutes.dynamic.art.subRoutes.user.base(userId))

    return arts.data ?? []
}

export const getFeaturedUserArts = async (userId: UUID): Promise<FeaturedArtArray> => {
    const userPath = backRoutes.dynamic.art.subRoutes.user.subRoutes.featured(userId)
    try {
        const featuredUserArts = await axios.get<FeaturedArtArray>(userPath)
        return featuredUserArts.data
    } catch {
    }

    return []
}

export const updateFeaturedArt = async (featuredArt: FeaturedArt, newOrder: number) => {
    const featuredArtPath = backRoutes.static.art.subRoutes.user.subRoutes.featured.path

    try {
        await axios.patch<FeaturedArt>(featuredArtPath, {
            artId: featuredArt.featuredArt.id,
            newOrderArt: newOrder
        })
        return { statusCode: 200, message: 'Featured art updated' }
    } catch (error) {
        return { statusCode: 500, message: `Something went wrong updating the featured art ${featuredArt.featuredArt.title}` }
    }
}

export const createUserFeaturedArtList = async (art: ArtEntity) => {
    const featuredArtPath = backRoutes.static.art.subRoutes.user.subRoutes.featured.path

    try {
        const response = await axios.post<FeaturedArt>(featuredArtPath, { artIdToAdd: art.id })
        console.log(response.data)
    } catch (error: any) {
        console.log({ aa: error.response.data })
    }
}

export const addUserFeaturedArt = async (art: ArtEntity) => {
    try {
        const response = await axios.post<ApiAddFeaturedArt>(backRoutes.static.art.subRoutes.user.subRoutes.featured.path, {
            artIdToAdd: art.id
        })
        return { statusCode: 200, message: 'Featured art added', data: response.data }
    } catch (error) {
        console.log(error)
        return { statusCode: 500, message: 'Something went wrong', data: null }
    }
}

export const removeUserFeaturedArt = async (artId: UUID) => {
    try {
        await axios.delete(backRoutes.dynamic.art.subRoutes.user.subRoutes.featured(artId))
        return { statusCode: 200, message: 'Art deleted from featured arts' }
    } catch (error) {
        console.log(error)
        return { statusCode: 500, message: 'Something went wrong deleting art' }
    }
}