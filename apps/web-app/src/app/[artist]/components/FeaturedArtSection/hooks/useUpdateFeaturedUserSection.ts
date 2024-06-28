import { useDebounce } from "@/hooks/useDebounce"
import { ArtEntityArray } from "@/models/logic/art.model"
import { createUserFeaturedArtList, updateArt } from "@/services/server/art.service"
import { UUID } from "crypto"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export const useUpdateFeaturedUserSection = (defaultFeaturedListId: UUID, featuredArtList: ArtEntityArray, isProfileOwner: boolean, setLoading: Dispatch<SetStateAction<boolean>>) => {
    const { valueDebounced } = useDebounce(isProfileOwner ? featuredArtList : null)
    const [featuredArtListUpdated, setFeaturedArtListUpdated] = useState<UUID>(defaultFeaturedListId)

    useEffect(() => {
        if (valueDebounced == null || !isProfileOwner || featuredArtList.length === 0) return
        setLoading(true)

        if (defaultFeaturedListId == null) {
            createUserFeaturedArtList(featuredArtList[0])
                .finally(() => {
                    setLoading(false)
                })
        }
        else {
            updateArt(featuredArtListUpdated, valueDebounced)
                .finally(() => {
                    setLoading(false)
                })
        }

        return () => {
            setLoading(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueDebounced, featuredArtList])
}