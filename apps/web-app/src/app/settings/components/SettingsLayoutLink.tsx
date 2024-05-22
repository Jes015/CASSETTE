import { Link, PartialLinkProps } from "@/components/ui/Link/Link"
import { FrontRoute } from "@/models/routes.model"
import clsx from "clsx"
import { FC } from "react"

interface SettingsLayoutLinkProps extends PartialLinkProps {
    route: FrontRoute
    currentPage?: boolean
}

export const SettingsLayoutLink: FC<SettingsLayoutLinkProps> = ({ route, currentPage, ...props }) => {
    return (
        <Link
            href={route.path}
            key={route.path}
            className={
                clsx(
                    "flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-zinc-300",
                    currentPage && 'bg-bg-tertiary/80 text-zinc-100 font-bold'
                )
            }
            {...props}
        />
    )
}