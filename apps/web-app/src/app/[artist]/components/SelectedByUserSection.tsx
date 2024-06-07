import { Art } from "@/components/feat/Art/Art"
import { ColumnArt } from "@/components/feat/ColumnArt/ColumnArt"
import { BaseComponentType } from "@/models/ui/component.model"

export const SelectedByUserSection: BaseComponentType = ({ className, ...props }) => {
    return (
        <ColumnArt
            headerProps={{
                title: 'Featured',
                type: 'secondary',
                description: 'Selected by the artist',
                className: '!border-b-0'
            }}
            className="w-full overflow-hidden"
            {...props}
        >
            <Art type="column" />
            <Art type="column" />
            <Art type="column" />
        </ColumnArt>
    )
}