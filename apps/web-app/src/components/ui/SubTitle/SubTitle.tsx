import { BaseComponentProps } from "@/models/component.model"
import { Title } from "@/models/titles.model"
import clsx from "clsx"
import { FC } from "react"

interface SubTitleProps extends BaseComponentProps {
    as: Title
}

export const SubTitle: FC<SubTitleProps> = ({ as, className, ...props }) => {
    return (
        <span
            className={
                clsx(
                    as === 'quaternary' && 'text-zinc-400 hover:underline text-[0.67rem] leading-3',
                    className
                )
            }
            {...props}
        />
    )
}