import { auth } from "@/auth"
import { Image } from "@/components/ui/Image/Image"
import { frontRoutes } from "@/models/routing/routes.model"
import { IconLock, IconUser } from "@tabler/icons-react"
import clsx from "clsx"
import { iconsSidebarSize } from "../../models/ui/icons-sidebar.model"
import { SidebarLink, SidebarLinkPartialType } from "../ui/SidebarLink"

export const SidebarUser: SidebarLinkPartialType = async ({ ...props }) => {
    const session = await auth()
    const isAuth = Boolean(session?.user.user)

    const userPath = isAuth ? { name: frontRoutes.static.artist.name, path: frontRoutes.dynamics.artist({ artistName: session?.user.user.username ?? '' }) } : frontRoutes.static.auth

    return (
        <SidebarLink
            route={userPath}
            className={
                clsx(
                    isAuth && "!p-0"
                )
            }
            {...props}
        >
            {
                isAuth ? (
                    <div className="relative flex justify-center items-center w-[38.2px] h-[38.2px]">
                        <IconUser {...iconsSidebarSize} />
                        <div className="absolute top-0 left-0 w-full h-full">
                            <Image className="blur-3xl ![transition-duration:0.4s] hover:blur-0 w-[38.2px] h-[38.2px]" alt={`Avatar of ${session?.user.user.username}`} loading="eager" src='/tainy.webp' width={88.2} height={88.2} />
                        </div>
                    </div>)
                    : <IconLock {...iconsSidebarSize} />
            }
        </SidebarLink>
    )
}