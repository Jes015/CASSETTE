import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"

export const TableHeader: BaseComponentType = ({ className, ...props }) => {
    return (
        <thead
            className={
                clsx(
                    'border-b-2 border-b-border-primary bg-bg-primary overflow-hidden'
                )
            }
            {...props}
        />
    )
}