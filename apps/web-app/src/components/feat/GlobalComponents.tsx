import { BaseComponentType } from "@/models/ui/component.model"
import { Toaster } from 'sonner'
import { GlobalLinearLoader } from "./GlobalLinearLoader/GlobalLinearLoader"

export const GlobalComponents: BaseComponentType = (props) => {
    return (
        <>
            <Toaster position="top-center" theme="dark" richColors toastOptions={{ className: '!bg-bg-secondary !text-text-secondary !border-border-primary border-2 !py-4' }} />
            <GlobalLinearLoader />
        </>
    )
}