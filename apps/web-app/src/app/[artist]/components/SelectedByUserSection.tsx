import { Art } from "@/components/feat/Art/Art"
import { RowArt } from "@/components/feat/RowArt/RowArt"
import { BaseComponentType } from "@/models/component.model"

export const SelectedByUserSection: BaseComponentType = ({ className, ...props }) => {
    return (
        <RowArt
            headerProps={{
                title: 'Placeres',
                type: 'secondary',
                description: 'Selected by the artist'
            }}
            className="w-full overflow-hidden"
            {...props}
        >
            <Art type='row' className="flex-grow" />
            <Art type='row' className="flex-grow" />
            <Art type='row' className="flex-grow" />
            <Art type='row' className="flex-grow" />
        </RowArt>
    )
}