import { BaseComponentProps } from "@/models/component.model"
import clsx from "clsx"
import { FC } from "react"

interface BadgeProps extends BaseComponentProps {
    color?: 'primary' | 'secondary'
}

export const Badge: FC<BadgeProps> = ({ className, color = 'primary', ...props }) => {
    return (
        <div
            className={
                clsx(
                    "inline-block border border-border-primary rounded-md font-semibold text-[0.6rem] px-1 leading-[1.1rem] opacity-95",
                    color === 'primary' && 'bg-bg-primary',
                    color === 'secondary' && 'bg-bg-secondary',
                    className
                )
            }
            {...props}
        />
    )
}