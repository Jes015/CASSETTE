import clsx from "clsx"
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"

interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
    size?: 'xl' | 'sm'
    variant?: 'transparent' | 'base'
}

export const Input: FC<InputProps> = ({ variant = 'base',  className, size = 'sm', ...props }) => {
    return (
        <input
            type="text"
            className={
                clsx(
                    'outline-none text-zinc-200 hover:text-zinc-100 transition-colors w-full',
                    variant === 'transparent' && 'bg-transparent',
                    variant === 'base' && 'bg-bg-primary hover:bg-bg-tertiary/15 focus-within:bg-bg-tertiary/15 p-2 rounded-md border border-border-primary/40 hover:border-border-primary focus-within:border-border-primary',
                    size === 'xl' && 'text-4xl font-bold',
                    className
                )
            }
            {...props}
        />
    )
}