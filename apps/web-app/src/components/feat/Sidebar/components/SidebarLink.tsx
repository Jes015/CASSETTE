import { PartialSheetProps, Sheet } from "@/components/ui/Sheet"
import clsx from "clsx"
import { FC } from "react"

interface SidebarLink extends PartialSheetProps {
    currentPage?: boolean
}

export const SidebarLink: FC<SidebarLink> = ({ className, currentPage = false, ...props }) => {
    return (
        <Sheet
            as="a"
            className={
                clsx(
                    'hover:bg-bg-primary/80 items-center hover:border-border-primary/80',
                    currentPage && '!bg-bg-primary !border-border-primary !text-zinc-100',
                    className
                )
            }
            {...props}
        />
    )
}