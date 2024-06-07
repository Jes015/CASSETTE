import { BaseComponentType } from "@/models/ui/component.model"
import clsx from "clsx"

export const TextFieldLabel: BaseComponentType = ({ className, ...props }) => {
    return (
        <span
            className={
                clsx(
                    className
                )
            }
            {...props}
        />
    )
}