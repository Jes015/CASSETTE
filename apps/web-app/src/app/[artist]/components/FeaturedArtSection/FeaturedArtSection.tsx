'use client'
import { Art } from "@/components/feat/Art/Art"
import { ArtFinder } from "@/components/feat/ArtFinder/ArtFinder"
import { ColumnArt } from "@/components/feat/ColumnArt/ColumnArt"
import { CircularLoader } from "@/components/ui/CircularLoader/CircularLoader"
import { ContextMenu } from "@/components/ui/ContextMenu/ContextMenu"
import { Text } from "@/components/ui/Text/Text"
import { ArtEntity, ArtEntityArray, FeaturedArtArray } from "@/models/logic/art.model"
import { BaseComponentProps } from "@/models/ui/component.model"
import { IconPlus } from "@tabler/icons-react"
import clsx from "clsx"
import { UUID } from "crypto"
import { FC } from "react"
import { useFeaturedSection } from "./hooks/useFeaturedSection"

interface FeaturedArtSectionProps extends BaseComponentProps {
    featuredArtList: FeaturedArtArray
    userArts: ArtEntityArray
    isProfileOwner: boolean
    userId: UUID
}

export const FeaturedArtSection: FC<FeaturedArtSectionProps> = ({ isProfileOwner, featuredArtList, userArts, className, userId, ...props }) => {
    const { artsDragAndDrop, artsListDragAndDropRef, addArt, removeArt, loading } = useFeaturedSection({ featuredArtArray: featuredArtList, isProfileOwner })

    const handleOnClickToRemoveArt = (artId: UUID) => () => {
        removeArt(artId)
    }

    const handleOnSelectArt = (art: ArtEntity) => {
        addArt(art)
    }

    return (
        <ColumnArt
            headerProps={{
                title: 'Featured',
                type: 'secondary',
                description: 'Selected by the artist',
                className: '!border-b-0',
                rightNode: isProfileOwner && (
                    <div className="flex items-center">
                        {
                            loading && (
                                <div className="scale-50 mt-[0.1rem] opacity-90">
                                    <CircularLoader />
                                </div>
                            )
                        }
                        <div className="flex items-center gap-2">
                            <Text as="quaternary"><span className="text-zinc-400">{artsDragAndDrop.length}/4</span> Arts selected</Text>
                        </div>
                    </div>
                )
            }}
            className="w-full overflow-hidden"
            {...props}
        >
            <div className="kanban-board">
                <ul ref={artsListDragAndDropRef}>
                    {
                        artsDragAndDrop.map((art) => (
                            <li
                                key={art.id ?? art.featuredArt.id}
                                className={
                                    clsx(
                                        "kanban-item flex items-center",
                                        loading && 'opacity-50 animate-pulse'
                                    )
                                }
                            >
                                <ContextMenu
                                    className="w-full"
                                    trigger={
                                        <Art data={art.featuredArt} type="column" {...{ isProfileOwner }}
                                            className={
                                                clsx(
                                                    "w-full",
                                                    isProfileOwner && 'hover:cursor-move !cursor-move selection:!cursor-move'
                                                )
                                            }
                                        />
                                    }
                                >
                                    <ContextMenu.Item onClick={handleOnClickToRemoveArt(art.id!)}>Remove</ContextMenu.Item>
                                </ContextMenu>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {
                (isProfileOwner && artsDragAndDrop.length <= 3) && (
                    <ArtFinder
                        userArts={userArts}
                        onSelectArt={handleOnSelectArt}
                        userId={userId}
                        artsToNotShow={artsDragAndDrop.map(featuredArt => featuredArt.featuredArt)}
                        trigger={
                            <button
                                className={
                                    clsx(
                                        "gap-2 !no-underline items-center hover:bg-bg-primary/70 cursor-pointer bg-bg-primary border-border-primary/40 p-2 relative overflow-hidden flex justify-center transition-all border-b-2 rounded-none",
                                        className
                                    )
                                }
                            >
                                <IconPlus />
                            </button>
                        }
                    />
                )
            }
        </ColumnArt>
    )
}