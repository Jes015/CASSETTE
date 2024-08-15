'use client'
import { usePathname, useRouter } from "next/navigation"

export const useRouting = () => {
    const currentPathname = usePathname()
    const routing = useRouter()

    const goTo = (path: string) => {
        routing.push(path)
    }

    const replace = (path: string) => {
        routing.replace(path)
    }

    const refresh = () => {
        routing.refresh()
    }

    const goToAndRefresh = (path: string) => {
        goTo(path)
        refresh()
    }

    return { currentPathname, goTo, refresh, goToAndRefresh, replace }
}