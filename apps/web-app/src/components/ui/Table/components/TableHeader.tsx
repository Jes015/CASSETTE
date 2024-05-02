import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"

export const TableHeader: BaseComponentType = ({ className, ...props }) => {
    return (
        <thead
            className={
                clsx(
                    'border border-border-primary bg-white rounded-sm'
                )
            }
            {...props}
        />
    )
}