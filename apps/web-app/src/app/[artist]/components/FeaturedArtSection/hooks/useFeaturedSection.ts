import { ArtEntity, FeaturedArt, FeaturedArtArray } from "@/models/logic/art.model"
import { addUserFeaturedArt, removeUserFeaturedArt, updateFeaturedArt } from "@/services/server/art.service"
import { useDragAndDrop } from "@formkit/drag-and-drop/react"
import { UUID } from "crypto"
import { useState } from "react"
import { toast } from 'sonner'

interface useFeaturedSectionProps {
    featuredArtArray: FeaturedArtArray,
    isProfileOwner: boolean
}

export const useFeaturedSection = ({ featuredArtArray, isProfileOwner }: useFeaturedSectionProps) => {
    const [loading, setLoading] = useState(false)

    const canMove = isProfileOwner && !loading

    const [artsListDragAndDropRef, artsDragAndDrop, setArts] = useDragAndDrop<HTMLUListElement, FeaturedArt>(
        featuredArtArray,
        {
            group: "artsListDragAndDrop",
            sortable: canMove,
            draggable: () => canMove,
            handleEnd() {
                const newFeaturedArts = artsDragAndDrop.map((featuredArt, index) => ({ ...featuredArt, order: Number(index + 1) }))
                setArts(newFeaturedArts)

                const updatingPromises: Promise<unknown>[] = []

                artsDragAndDrop.forEach((featuredArt, index) => {
                    const oldFeaturedArtIndex = Number(featuredArt.order)
                    const newFeaturedArtIndex = Number(newFeaturedArts[index].order)

                    if (oldFeaturedArtIndex !== newFeaturedArtIndex) {
                        const updateArtPromise = updateFeaturedArt(featuredArt, newFeaturedArtIndex)

                        updatingPromises.push(updateArtPromise)
                    }
                })

                Promise.all(updatingPromises)
                    .then(() => {
                        if (updatingPromises.length !== 0) {
                            toast.success('Featured arts updated')
                        }

                    })
                    .catch(() => {
                        toast.error('Something went wrong updating featured arts')
                    })
            }
        }
    )

    const addArt = async (newArt: ArtEntity) => {
        if (artsDragAndDrop.length < 4) {
            let newOrderArt = 1
            let higherOrderArt = 1

            artsDragAndDrop.forEach((featuredArt) => {
                if (higherOrderArt < featuredArt.order) {
                    higherOrderArt = featuredArt.order
                }
            })

            newOrderArt += higherOrderArt


            try {
                setLoading(true)
                const response = await addUserFeaturedArt(newArt)

                let toastMethod: 'success' | 'error' = 'error'

                if (response.statusCode >= 200 && response.statusCode < 300) {
                    toastMethod = 'success'
                }

                toast[toastMethod](response.message)

                setArts([...artsDragAndDrop, response.data!])
            }
            catch (error) {
            }
            finally {
                setLoading(false)
            }
        }
    }

    const removeArt = async (artId: UUID) => {
        const newArtList = artsDragAndDrop.filter((prevArt) => prevArt.id !== artId)

        try {
            setLoading(true)
            const response = await removeUserFeaturedArt(artId)

            let toastMethod: 'success' | 'error' = 'error'

            if (response.statusCode >= 200 && response.statusCode < 300) {
                toastMethod = 'success'
            }

            toast[toastMethod](response.message)

            setArts(newArtList)
        }
        catch (error) {
        }
        finally {
            setLoading(false)
        }
    }



    return { artsListDragAndDropRef, artsDragAndDrop, addArt, removeArt, loading }
}