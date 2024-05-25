'use client'
import { Sheet } from "@/components/ui/Sheet"
import { useRouting } from "@/hooks/useRouting"
import { BaseComponentType } from "@/models/component.model"
import { frontRoutes } from "@/models/routes.model"
import { HeartIcon, HomeIcon, MagicWandIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { IconPlus, IconSettings, IconUser } from "@tabler/icons-react"
import { SidebarLink } from "./components/SidebarLink"


const topSidebarLinks = [
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
    const { currentPathname } = useRouting()

    const iconsSize = { width: 19, height: 19 }
    return (
        <Sheet
            border="right"
            className="bg-bg-secondary flex flex-col justify-between border-r-2 p-2 pt-4 h-svh flex-shrink-0"
            rounded="none"
        >
            <div
                className="flex flex-col gap-1"
            >
                {
                    topSidebarLinks.map((link) => (
                        <SidebarLink key={link.route.name} route={link.route} currentPage={currentPathname === link.route.path}>
                            <link.icon {...iconsSize} />
                        </SidebarLink>
                    ))
                }
            </div>
            <div
                className="flex flex-col gap-1"
            >
                <SidebarLink
                    route={frontRoutes.static.upload}
                    currentPage={currentPathname === frontRoutes.static.upload.path}
                >
                    <IconPlus {...iconsSize} />
                </SidebarLink>
                <SidebarLink
                    route={{ name: frontRoutes.static.artist.name, path: frontRoutes.dynamics.artist({ artistName: 'joyolababy' }) }}
                    currentPage={currentPathname === '/joyolababy'}
                >
                    <IconUser {...iconsSize} />
                </SidebarLink>
                <SidebarLink
                    route={frontRoutes.static.settings}
                    currentPage={currentPathname === frontRoutes.static.settings.path}
                >
                    <IconSettings {...iconsSize} />
                </SidebarLink>
            </div>
        </Sheet>
    )
}