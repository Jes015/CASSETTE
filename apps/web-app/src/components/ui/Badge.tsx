import { BaseComponentProps } from "@/models/component.model"
import clsx from "clsx"
import { FC } from "react"

interface BadgeProps extends BaseComponentProps {
    styles?: 'primary' | 'secondary' | 'tertiary'
    size?: 'small' | 'big'
    as?: keyof JSX.IntrinsicElements
}

export const Badge: FC<BadgeProps> = ({ className, as, size = 'small',styles: color = 'primary', ...props }) => {
    const Element = as ?? 'div'

    return (
        // @ts-expect-error expected error by polymorphic component
        <Element
            className={
                clsx(
                    "inline-block font-semibold opacity-95 transition-all",
                    size === 'small' && 'text-[0.6rem] px-1 rounded-md leading-[1.1rem] border border-border-primary',
                    size === 'big' && 'text-[0.8rem] px-2 rounded-lg leading-[1.4rem] border-[1.5px] border-border-primary/80',
                    color === 'primary' && 'bg-bg-primary',
                    color === 'secondary' && 'bg-bg-secondary',
                    color === 'tertiary' && 'bg-bg-tertiary hover:bg-bg-tertiary/50',
                    className
                )
            }
            {...props}
        />
    )
}