import { BaseComponentType } from "@/models/component.model"

interface TableRowProps {
    header?: boolean
}

export const TableRow: BaseComponentType = (props) => {
    return (
        <tr
            className="border-b-2 border-b-border-secondary"
            {...props}
        />
    )
}