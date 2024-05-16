'use client'
import LinearLoading from "@/components/ui/LinearLoading/LinearLoading"
import { BaseComponentType } from "@/models/component.model"
import { useGlobalLinearLoader } from "./hooks/useGlobalLinearLoader"

export const GlobalLinearLoader: BaseComponentType = ({ className, ...props }) => {
    useGlobalLinearLoader()
    return (
        <div
            className=""
            {...props}
        >
            <LinearLoading />
        </div>
    )
}