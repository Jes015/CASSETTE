import { Art } from '@/components/feat/Art/Art'
import { ColumnArt } from '@/components/feat/ColumnArt/ColumnArt'
import { PartialSectionType } from '@/components/ui/Section/Section'

export const ActivitySection: PartialSectionType = ({ className, ...props }) => {
    return (
        <ColumnArt
            headerProps={{
                title: 'Activity',
                type: 'secondary',
                description: 'Recent content of the artist'
            }}
            
        >
            <Art type='column' />
            <Art type='column' />
            <Art type='column' />
            <Art type='column' />
            <Art type='column' />
            <Art type='column' />
            <Art type='column' />
        </ColumnArt>
    )
}