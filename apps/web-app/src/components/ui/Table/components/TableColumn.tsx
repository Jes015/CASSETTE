import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"

export const TableColumn: BaseComponentType = ({ className, ...props }) => {
    return (
        <th
            className={
                clsx(
                    'border-r border-r-border-primary p-2',
                    className
                )
            }
            {...props}
        />
    )
}