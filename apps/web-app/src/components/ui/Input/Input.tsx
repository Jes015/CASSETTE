import { BaseComponentProps } from "@/models/component.model"
import clsx from "clsx"
import { FC } from "react"

interface InputProps extends BaseComponentProps {
    size: 'xl' | 'sm'
}

export const Input: FC<InputProps> = ({ className, size, ...props }) => {
    return (
        <input
            type="text"
            className={
                clsx(
                    'outline-none bg-transparent text-zinc-200 hover:text-zinc-100 transition-colors w-full',
                    size === 'xl' && 'text-4xl font-bold',
                    className
                )
            }
            {...props}
        />
    )
}