import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"

export const SectionContent: BaseComponentType = ({ className, ...props }) => {
    return (
        <div
            className={
                clsx(
                    "flex gap-2 flex-grow",
                    className
                )
            }
            {...props}
        />
    )
}