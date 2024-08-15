import { BaseComponentType } from "@/models/ui/component.model"
import clsx from "clsx"

export const TextFieldError: BaseComponentType = ({ className, ...props }) => {
    return (
        <span
            className={
                clsx(
                    'text-red-300 text-xs',
                    className
                )
            }
            {...props}
        />
    )
}