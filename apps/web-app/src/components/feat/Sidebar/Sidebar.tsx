import { Sheet } from "@/components/ui/Sheet"
import { BaseComponentType } from "@/models/component.model"
import { frontRoutes } from "@/models/routes.model"
import { HomeIcon, MagicWandIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { SidebarLink } from "./components/SidebarLink"

export const Sidebar: BaseComponentType = () => {
    return (
        <Sheet
            border="right"
            className="bg-bg-secondary border-r-2 p-2 pt-4"
            rounded="none"
        >
            <div
                className="flex flex-col gap-1"
            >
                <SidebarLink route={frontRoutes.home} currentPage>
                    <HomeIcon width={19} height={19} />
                </SidebarLink>
                <SidebarLink route={frontRoutes.explore}>
                    <MagnifyingGlassIcon width={19} height={19} />
                </SidebarLink>
                <SidebarLink route={frontRoutes.talents}>
                    <MagicWandIcon width={19} height={19} />
                </SidebarLink>
            </div>
        </Sheet>
    )
}