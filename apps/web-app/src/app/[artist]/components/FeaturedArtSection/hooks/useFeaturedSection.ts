import { ArtEntity, FeaturedArt } from "@/models/logic/art.model"
import { useDragAndDrop } from "@formkit/drag-and-drop/react"
import { useState } from "react"
import { useUpdateFeaturedUserSection } from "./useUpdateFeaturedUserSection"

interface useFeaturedSectionProps {
    featuredArt: FeaturedArt,
    isProfileOwner: boolean
}

export const useFeaturedSection = ({ featuredArt, isProfileOwner }: useFeaturedSectionProps) => {
    const [loading, setLoading] = useState(false)

    const canMove = isProfileOwner && !loading

    const [artsListDragAndDropRef, artsDragAndDrop, setArts] = useDragAndDrop<HTMLUListElement, ArtEntity>(
        featuredArt.featuredArts,
        {
            group: "artsListDragAndDrop",
            sortable: canMove,
            draggable: () => canMove
        }
    )

    const addArt = (newArt: ArtEntity) => {
        setArts([...artsDragAndDrop, newArt])
    }

    

    useUpdateFeaturedUserSection(featuredArt.id!, artsDragAndDrop, isProfileOwner, setLoading)

    return { artsListDragAndDropRef, artsDragAndDrop, loading, addArt }
}