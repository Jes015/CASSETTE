import clsx from "clsx"
import { ButtonHTMLAttributes, forwardRef } from "react"
import { CircularLoader } from "../CircularLoader/CircularLoader"
import { Sheet } from "../Sheet"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
    disabled?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, disabled = false, loading = false, ...props }, ref) => {
        return (
            <Sheet
                as="button"
                ref={ref}
                className={
                    clsx(
                        'relative !bg-bg-primary !border-border-primary/50 bg-cassette hover:!bg-bg-primary/5',
                        disabled && 'opacity-50',
                        loading && 'opacity-80 animate-pulse [animation-duration:0.8s] cursor-default',
                        className
                    )
                }
                {...{ ...props, disabled: disabled || loading }}
            >
                {
                    loading && (
                        <div
                            className="absolute w-full h-full flex justify-center items-center !bg-bg-primary"
                        >
                            <div
                                className="scale-75 -mt-3 opacity-50"
                            >
                                <CircularLoader />
                            </div>
                        </div>
                    )
                }
                {children}
            </Sheet>
        )
    }
)

Button.displayName = 'Button'