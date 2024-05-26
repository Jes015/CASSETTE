import clsx from "clsx"
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react"

interface TextArea extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    variant: 'transparent' | 'base'
}

const TextArea: FC<TextArea> = ({ className, variant, ...props }) => {
    return (
        <textarea
            className={
                clsx(
                    'outline-none transition-colors w-full h-[48px] text-xs',
                    variant === 'transparent' ? 'bg-transparent text-text-tertiary font-medium' : 'text-zinc-200 hover:text-zinc-100',
                    variant === 'base' && 'bg-bg-primary p-2 rounded-md border border-border-primary/40 hover:border-border-primary focus-within:border-border-primary',
                    className
                )
            }
            {...props}
        />
    )
}

export default TextArea