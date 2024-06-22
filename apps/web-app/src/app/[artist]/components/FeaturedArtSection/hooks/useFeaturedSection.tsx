import { ArtEntity, ArtEntityArray } from "@/models/logic/art.model"
import { useDragAndDrop } from "@formkit/drag-and-drop/react"

interface useFeaturedSectionProps {
    defaultArts: ArtEntityArray,
    isProfileOwner: boolean
}

export const useFeaturedSection = ({ defaultArts, isProfileOwner }: useFeaturedSectionProps) => {
    const [artsListDragAndDropRef, artsDragAndDrop] = useDragAndDrop<HTMLUListElement, ArtEntity>(
        defaultArts,
        {
            group: "artsListDragAndDrop",
            sortable: isProfileOwner
        }
    )
    return { artsListDragAndDropRef, artsDragAndDrop }
}