import { Art } from '@/components/feat/Art/Art'
import { ColumnArt } from '@/components/feat/ColumnArt/ColumnArt'
import { Sheet } from '@/components/ui/Sheet'
import { Title } from '@/components/ui/Title/Title'
import { ArtEntityArray } from '@/models/logic/art.model'
import { FC } from 'react'

interface ActivitySectionProps {
    userArts: ArtEntityArray
}
export const ActivitySection: FC<ActivitySectionProps> = ({ userArts }) => {
    return (
        <ColumnArt
            headerProps={{
                title: 'Activity',
                type: 'secondary',
                description: 'Recent content of the artist'
            }}

        >
            {
                userArts.length === 0 && (
                    <Sheet border="bottom" className="p-2 flex justify-center">
                        <Title>No arts found</Title>
                    </Sheet>
                )
            }
            {
                userArts.map((art) => (
                    <Art key={art.id} data={art} type='column' />
                ))
            }
        </ColumnArt>
    )
}