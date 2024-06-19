import { Sheet } from "@/components/ui/Sheet"
import { frontRoutes } from "@/models/routing/routes.model"
import { BaseComponentType } from "@/models/ui/component.model"
import { HeartIcon, HomeIcon, MagicWandIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { IconPlus, IconSettings } from "@tabler/icons-react"
import { SidebarUser } from "./components/feat/SidebarUser"
import { SidebarLink } from "./components/ui/SidebarLink"
import { iconsSidebarSize } from "./models/ui/icons-sidebar.model"


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
                        <SidebarLink
                            key={link.route.name}
                            route={link.route}
                        >
                            <link.icon {...iconsSidebarSize} />
                        </SidebarLink>
                    ))
                }
            </div>
            <div
                className="flex flex-col gap-1"
            >
                <SidebarLink
                    route={frontRoutes.static.upload}
                >
                    <IconPlus {...iconsSidebarSize} />
                </SidebarLink>
                <SidebarUser />
                <SidebarLink
                    route={frontRoutes.static.settings}
                >
                    <IconSettings {...iconsSidebarSize} />
                </SidebarLink>
            </div>
        </Sheet>
    )
}