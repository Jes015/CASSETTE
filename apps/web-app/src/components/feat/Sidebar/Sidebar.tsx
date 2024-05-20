'use client'
import { Sheet } from "@/components/ui/Sheet"
import { BaseComponentType } from "@/models/component.model"
import { frontRoutes } from "@/models/routes.model"
import { HeartIcon, HomeIcon, MagicWandIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { usePathname } from "next/navigation"
import { SidebarLink } from "./components/SidebarLink"


const sidebarLinks = [
    {
        route: frontRoutes.static.home,
        icon: HomeIcon
    },
    {
        route: frontRoutes.static.whatilove,
        icon: HeartIcon
    },
    {
        route: frontRoutes.static.explore,
        icon: MagnifyingGlassIcon
    },
    {
        route: frontRoutes.static.talents,
        icon: MagicWandIcon
    }
]

export const Sidebar: BaseComponentType = () => {
    const pathname = usePathname()
    
    return (
        <Sheet
            border="right"
            className="bg-bg-secondary border-r-2 p-2 pt-4 h-svh flex-shrink-0"
            rounded="none"
        >
            <div
                className="flex flex-col gap-1"
            >
                {
                    sidebarLinks.map((link) => (
                        <SidebarLink key={link.route.name} route={link.route} currentPage={pathname  === link.route.path}>
                            <link.icon width={19} height={19} />
                        </SidebarLink>
                    ))
                }
            </div>
        </Sheet>
    )
}