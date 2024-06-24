import { Art } from '@/components/feat/Art/Art'
import { ColumnArt } from '@/components/feat/ColumnArt/ColumnArt'
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
                userArts.map((art) => (
                    <Art key={art.id} data={art} type='column' />
                ))
            }
        </ColumnArt>
    )
}