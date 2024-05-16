import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"

export const TableColumn: BaseComponentType = ({ className, ...props }) => {
    return (
        <th
            className={
                clsx(
                    'p-2 font-normal',
                    className
                )
            }
            {...props}
        />
    )
}