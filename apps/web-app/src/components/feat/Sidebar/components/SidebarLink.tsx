import { PartialSheetProps, Sheet } from "@/components/ui/Sheet"
import { Tooltip } from "@/components/ui/Tooltip/Tooltip"
import { FrontRoute } from "@/models/routes.model"
import clsx from "clsx"
import { FC } from "react"

interface SidebarLink extends PartialSheetProps {
    route: FrontRoute
    currentPage?: boolean
}

export const SidebarLink: FC<SidebarLink> = ({ route, className, currentPage = false, ...props }) => {
    return (
        <Tooltip
            trigger={
                <Sheet
                    as="a"
                    aria-label={`Go to ${route.name} page`}
                    href={route.path}
                    className={
                        clsx(
                            'hover:bg-bg-primary/80 items-center hover:border-border-primary/80',
                            currentPage && '!bg-bg-primary !border-border-primary !text-zinc-100',
                            className
                        )
                    }
                    {...props}
                />
            }
            content={route.name}
            contentProps={{
                side: 'right',
                className: 'text-xs font-semibold'
            }}
        />
    )
}