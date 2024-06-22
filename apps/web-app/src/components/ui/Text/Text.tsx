import { BaseComponentProps } from "@/models/ui/component.model"
import { Title } from "@/models/ui/titles.model"
import clsx from "clsx"
import { FC } from "react"

interface TextProps extends BaseComponentProps {
    as: Title
}

export const Text: FC<TextProps> = ({ as, className, ...props }) => {
    return (
        <span
            className={
                clsx(
                    as === 'quaternary' && 'text-zinc-500 hover:underline text-[0.62rem] leading-3 font-medium',
                    className
                )
            }
            {...props}
        />
    )
}