import { useOnPageLoad } from "@/hooks/useOnPageLoad"
import { globalLoaderService } from "@/services/client/CustomEvents/global-loader.client-service-custom-events"
import { useEffect, useState } from "react"

export const useGlobalLinearLoader = () => {
    const [displayLoader, setDisplayLoader] = useState(false)

    useOnPageLoad(() => {
        setDisplayLoader(false)
    })

    useEffect(() => {
        globalLoaderService.listenEvent((details) => {
            setDisplayLoader(Boolean(details?.detail))
        })

        return () => {
            globalLoaderService.removeEvent()
        }
    }, [])

    return { displayLoader }
}