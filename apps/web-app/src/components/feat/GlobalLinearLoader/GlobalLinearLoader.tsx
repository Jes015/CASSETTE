'use client'
import LinearLoading from "@/components/ui/LinearLoading/LinearLoading"
import { BaseComponentType } from "@/models/ui/component.model"
import clsx from "clsx"
import { useGlobalLinearLoader } from "./hooks/useGlobalLinearLoader"

export const GlobalLinearLoader: BaseComponentType = ({ className, ...props }) => {
    const { displayLoader } = useGlobalLinearLoader()

    return (
        <div
            className={clsx('fixed top-0 w-dvw')}
            {...props}
        >
            {displayLoader && <LinearLoading />}
        </div>
    )
}