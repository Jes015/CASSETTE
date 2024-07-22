import { Input } from "@/components/ui/Input/Input"
import { Modal } from "@/components/ui/Modal/Modal"
import { Sheet } from "@/components/ui/Sheet"
import { Title } from "@/components/ui/Title/Title"
import { ArtEntity, ArtEntityArray } from "@/models/logic/art.model"
import { IconSearch } from "@tabler/icons-react"
import { UUID } from "crypto"
import { FC, useEffect, useState } from "react"
import { Art } from "../Art/Art"

interface ArtFinderProps {
    onSelectArt: (art: ArtEntity) => void
    userId: UUID
    userArts: ArtEntityArray
    trigger: React.ReactNode
    artsToNotShow?: ArtEntityArray
}

export const ArtFinder: FC<ArtFinderProps> = ({ onSelectArt, userId, userArts, trigger, artsToNotShow = [] }) => {
    const [artsAllowed, setArtsAllowed] = useState(userArts.filter((userArt) => !artsToNotShow.some((artToNotShow) => artToNotShow.id === userArt.id)))

    useEffect(() => {
        setArtsAllowed(userArts.filter((userArt) => !artsToNotShow.some((artToNotShow) => artToNotShow.id === userArt.id)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artsToNotShow])

    const handleOnSelectBeat = (artSelected: ArtEntity) => () => {
        onSelectArt(artSelected)

        const newArtArray = artsAllowed.filter((art) => art.id !== artSelected.id)
        setArtsAllowed(newArtArray)
    }

    return (
        <Modal
            trigger={trigger}
            headerProps={{
                title: 'Art finder',
                description: 'Select an art',
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
        </Modal >
    )
}