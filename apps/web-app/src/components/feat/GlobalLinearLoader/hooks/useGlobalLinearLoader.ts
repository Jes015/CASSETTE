import { globalLoaderService } from "@/services/client/global-loader.client-service"
import { useEffect } from "react"

export const useGlobalLinearLoader = () => {
    useEffect(() => {
        globalLoaderService.listenEvent((details) => {
            if (details == null) return
            console.log(details)
        })

        return () => {
            globalLoaderService.removeEvent()
        }
    }, [])
}