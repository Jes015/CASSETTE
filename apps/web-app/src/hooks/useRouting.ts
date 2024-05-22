import { usePathname } from "next/navigation"

export const useRouting = () => {
    const currentPathname = usePathname()

    return { currentPathname }
}