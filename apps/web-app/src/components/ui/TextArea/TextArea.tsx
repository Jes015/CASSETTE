import clsx from "clsx"
import { DetailedHTMLProps, FC, forwardRef, TextareaHTMLAttributes } from "react"

interface TextArea extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    variant: 'transparent' | 'base'
}

const TextArea: FC<TextArea> = forwardRef(
    ({ className, variant, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={
                    clsx(
                        'outline-none transition-colors w-full h-[100px] text-xs',
                        variant === 'transparent' ? 'bg-transparent text-text-tertiary font-medium' : 'text-zinc-200 hover:text-zinc-100',
                        variant === 'base' && 'bg-bg-primary hover:bg-bg-tertiary/15 focus-within:bg-bg-tertiary/15 p-2 rounded-md border border-border-primary/40 hover:border-border-primary focus-within:border-border-primary',
                        className
                    )
                }
                {...props}
            />
        )
    }
)

TextArea.displayName = 'TextArea'

export default TextArea