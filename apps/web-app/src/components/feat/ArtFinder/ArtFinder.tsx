import { Input } from "@/components/ui/Input/Input"
import { Sheet } from "@/components/ui/Sheet"
import { Title } from "@/components/ui/Title/Title"
import { ArtEntity, ArtEntityArray } from "@/models/logic/art.model"
import { IconSearch, IconX } from "@tabler/icons-react"
import { UUID } from "crypto"
import { FC, ReactElement, cloneElement, useEffect, useState } from "react"
import { Art } from "../Art/Art"
import { ColumnArt } from "../ColumnArt/ColumnArt"

interface ArtFinderProps {
    onSelectArt: (art: ArtEntity) => void
    userId: UUID
    userArts: ArtEntityArray
    trigger: React.ReactNode
    artsToNotShow?: ArtEntityArray
}

export const ArtFinder: FC<ArtFinderProps> = ({ onSelectArt, userId, userArts, trigger, artsToNotShow = [] }) => {
    const [displayArtFinder, setDisplayArtFinder] = useState(false)
    const [artsAllowed, setArtsAllowed] = useState(userArts.filter((userArt) => !artsToNotShow.some((artToNotShow) => artToNotShow.id === userArt.id)))

    useEffect(() => {
        setArtsAllowed(userArts.filter((userArt) => !artsToNotShow.some((artToNotShow) => artToNotShow.id === userArt.id)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artsToNotShow])

    const toggleDisplayArtFinder = (newState: boolean) => {
        setDisplayArtFinder(newState)
    }

    const handleOnSelectBeat = (artSelected: ArtEntity) => () => {
        onSelectArt(artSelected)

        const newArtArray = artsAllowed.filter((art) => art.id !== artSelected.id)
        setArtsAllowed(newArtArray)
    }

    return (
        <>
            {cloneElement(trigger as ReactElement, { onClick: () => { toggleDisplayArtFinder(true) } })}
            {
                displayArtFinder && (
                    <div
                        className="fixed m-auto left-0 right-0 w-fit z-40 top-40 bottom-0 overflow-hidden"
                    >
                        <ColumnArt
                            className="overflow-hidden"
                            headerProps={{
                                title: 'Beat finder',
                                description: 'Select a beat',
                                className: "z-50 !p-1 !pl-2",
                                rightNode: (
                                    <div className="flex items-stretch">
                                        <button className="hover:bg-bg-tertiary rounded-md p-1" onClick={() => { toggleDisplayArtFinder(false) }}>
                                            <IconX width={18} height={18} />
                                        </button>
                                    </div>
                                )
                            }}
                        >
                            {
                                artsAllowed.length > 4 && (
                                    <label className="flex items-center border-b border-border-primary text-sm pl-2">
                                        <IconSearch className="text-zinc-300" width={20} height={20} />
                                        <Input
                                            variant="transparent"
                                            className="p-2 placeholder-shown:text-xs h-10"
                                            placeholder="Dákiti, holii, Cassette ..."
                                        />
                                    </label>
                                )
                            }
                            {
                                artsAllowed.length === 0 && (
                                    <Sheet border="bottom" className="p-2 flex justify-center">
                                        <Title>No arts found</Title>
                                    </Sheet>
                                )
                            }
                            {
                                artsAllowed.map((art) => (
                                    <Art key={art.id} as="article" type="column" data={art} displayButtons={false} onClick={handleOnSelectBeat(art)} />
                                ))
                            }
                        </ColumnArt>
                    </div>
                )
            }
        </>
    )
}