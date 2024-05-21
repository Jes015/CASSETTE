import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"

export const Input: BaseComponentType = ({ className, ...props }) => {
    return (
        <input
            type="text"
            className={
                clsx('', className)
            }
            {...props}
        />
    )
}