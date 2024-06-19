import clsx from "clsx"
import { ButtonHTMLAttributes, forwardRef } from "react"
import { Sheet } from "../Sheet"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, loading = false, ...props }, ref) => {
        return (
            <Sheet
                as="button"
                ref={ref}
                className={
                    clsx(
                        '!bg-bg-primary !border-border-primary/50 bg-cassette hover:!bg-bg-primary/5',
                        loading && 'opacity-50',
                        className
                    )
                }
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'