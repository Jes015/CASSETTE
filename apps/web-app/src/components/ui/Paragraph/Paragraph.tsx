import { BaseComponentProps } from "@/models/ui/component.model"
import clsx from "clsx"
import { FC } from "react"
import { ParagraphElement } from "./models/paragraph.model"

interface ParagraphProps extends BaseComponentProps {
    as?: ParagraphElement
}

export const Paragraph: FC<ParagraphProps> = ({ className, as = 'secondary', ...props }) => {
    return (
        <p
            className={
                clsx(
                    'select-text text-pretty',
                    as === 'secondary' && 'text-base',
                    as === 'tertiary' && 'text-sm text-text-secondary font-medium',
                    as === 'quaternary' && 'text-xs text-text-tertiary font-medium',
                    className
                )
            }
            {...props}
        />
    )
}