import { BaseComponentProps } from "@/models/component.model"
import clsx from "clsx"
import { forwardRef } from "react"
import { Sheet } from "../Sheet"

export const Button = forwardRef<HTMLButtonElement, BaseComponentProps>(
    ({ className, ...props }, ref) => {
        return (
            <Sheet
                as="button"
                ref={ref}
                className={
                    clsx(
                        '!bg-bg-primary !border-border-primary/50 bg-cassette hover:!bg-bg-primary/5',
                        className
                    )
                }
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'