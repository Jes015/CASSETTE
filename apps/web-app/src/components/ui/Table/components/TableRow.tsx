import { PartialSheetType, Sheet } from "../../Sheet"

export const TableRow: PartialSheetType = (props) => {
    return (
        <Sheet
            as="tr"
            border="bottom"
            className="!table-row"
            {...props}
        />
    )
}