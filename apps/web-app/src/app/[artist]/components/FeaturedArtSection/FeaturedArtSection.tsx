'use client'
import { Art } from "@/components/feat/Art/Art"
import { ArtFinder } from "@/components/feat/ArtFinder/ArtFinder"
import { ColumnArt } from "@/components/feat/ColumnArt/ColumnArt"
import { Text } from "@/components/ui/Text/Text"
import { ArtEntityArray, FeaturedArt } from "@/models/logic/art.model"
import { BaseComponentProps } from "@/models/ui/component.model"
import { IconPlus } from "@tabler/icons-react"
import clsx from "clsx"
import { UUID } from "crypto"
import { FC } from "react"
import { useFeaturedSection } from "./hooks/useFeaturedSection"

interface FeaturedArtSectionProps extends BaseComponentProps {
    featuredArtList: FeaturedArt
    userArts: ArtEntityArray
    isProfileOwner: boolean
    userId: UUID
}

export const FeaturedArtSection: FC<FeaturedArtSectionProps> = ({ isProfileOwner, featuredArtList, userArts, className, userId, ...props }) => {
    const { artsDragAndDrop, artsListDragAndDropRef, loading, addArt } = useFeaturedSection({ featuredArt: featuredArtList, isProfileOwner })

    return (
        <ColumnArt
            headerProps={{
                title: 'Featured',
                type: 'secondary',
                description: 'Selected by the artist',
                className: '!border-b-0',
                rightNode: isProfileOwner && (
                    <div className="flex items-center gap-2">
                        {loading && 'loading'}
                        <Text as="quaternary"><span className="text-zinc-400">{artsDragAndDrop.length}/4</span> Arts selected</Text>
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
                            <li key={art.id} className="kanban-item flex items-center">
                                <Art data={art} type="column" {...{ isProfileOwner }}
                                    className={
                                        clsx(
                                            "w-full",
                                            isProfileOwner && 'hover:cursor-move !cursor-move selection:!cursor-move'
                                        )
                                    }
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
            {
                (isProfileOwner && featuredArtList.featuredArts.length <= 3) && (
                    <ArtFinder
                        userArts={userArts}
                        onSelectArt={(art) => { addArt(art) }}
                        userId={userId}
                        artsToNotShow={featuredArtList.featuredArts}
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