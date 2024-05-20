import { Link, PartialLinkProps } from "@/components/ui/Link/Link"
import { Tooltip } from "@/components/ui/Tooltip/Tooltip"
import { FrontRoute } from "@/models/routes.model"
import clsx from "clsx"
import { FC } from "react"

interface SidebarLink extends PartialLinkProps {
    route: FrontRoute
    currentPage?: boolean
}

export const SidebarLink: FC<SidebarLink> = ({ route, className, currentPage = false, ...props }) => {
    return (
        <Tooltip
            trigger={
                <div>
                    <Link
                        aria-label={`Go to ${route.name} page`}
                        href={route.path}
                        className={
                            clsx(
                                'bg-bg-secondary border-border-primary/40 p-2 relative rounded-md overflow-hidden flex justify-center transition-all border-2',
                                'hover:bg-bg-primary/80 items-center hover:border-border-primary/80',
                                currentPage && '!bg-bg-tertiary !border-border-primary !text-zinc-100',
                                className
                            )
                        }
                        {...props}
                    />
                </div>
            }
            content={route.name}
            contentProps={{
                side: 'right',
                className: 'text-xs font-semibold'
            }}
        />
    )
}