import { auth } from "@/auth"
import { frontRoutes } from "@/models/routing/routes.model"
import { IconLock, IconUser } from "@tabler/icons-react"
import { iconsSidebarSize } from "../../models/ui/icons-sidebar.model"
import { SidebarLink, SidebarLinkPartialType } from "../ui/SidebarLink"

export const SidebarUser: SidebarLinkPartialType = async ({ ...props }) => {
    const session = await auth()
    const isAuth = Boolean(session?.user.user)

    const userPath = isAuth ? { name: frontRoutes.static.artist.name, path: frontRoutes.dynamics.artist({ artistName: session?.user.user.username ?? '' }) } : frontRoutes.static.auth
    
    return (
        <SidebarLink
            route={userPath}
            {...props}
        >
            {
                isAuth ? <IconUser {...iconsSidebarSize} /> : <IconLock {...iconsSidebarSize} />
            }
        </SidebarLink>
    )
}