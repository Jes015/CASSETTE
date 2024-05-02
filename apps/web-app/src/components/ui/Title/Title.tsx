import { BaseComponentProps } from "@/models/component.model"
import clsx from "clsx"
import { FC } from "react"
import { TitleElement, titleElement } from "./models/title.model"

interface TitleProps extends BaseComponentProps {
    as?: TitleElement
}

export const Title: FC<TitleProps> = ({ as = 'tertiary', className, ...props }) => {
    const Component = titleElement[as]

    return (
        <Component
            className={
                clsx(
                    as === 'secondary' && 'text-4xl font-bold',
                    as === 'tertiary' && 'text-2xl font-bold',
                    as === 'quaternary' && 'text-base font-semibold leading-4',
                    className
                )
            }
            {...props}
        />
    )
}