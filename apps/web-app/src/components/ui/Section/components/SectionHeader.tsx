import { BaseComponentProps } from "@/models/component.model"
import clsx from "clsx"
import { FC } from "react"
import { Sheet } from "../../Sheet"
import { Title } from "../../Title/Title"

interface SectionHeaderProps extends BaseComponentProps {
    title: string
    description?: string
    type?: 'main' | 'secondary'
    rightNode?: React.ReactNode
}

export type PartialSectionHeaderProps = Partial<SectionHeaderProps>

export type PartialSectionHeaderType = FC<SectionHeaderProps>

export const SectionHeader: FC<SectionHeaderProps> = ({ title, description, type, className, rightNode, ...props }) => {
    if (type === 'main') {
        return (
            <header
                className={
                    clsx(
                        "flex items-center gap-1",
                        className
                    )
                }
                {...props}
            >
                <Title className="[text-shadow:0px_0px_4px_rgb(105,105,105)] text-c4ss3t3">{title}</Title>
                <span className="self-center pt-[0.24rem] text-zinc-400 text-xs">{description}</span>
            </header>
        )
    }

    if (type === 'secondary') {
        return (
            <Sheet
                as="header"
                className={
                    clsx(
                        "!bg-bg-primary !justify-between !items-center",
                        className
                    )
                }
                border="bottom"
                rounded="none"
                {...props}
            >
                <div
                    className="flex items-center gap-1 font-medium"
                >
                    <span
                        className="font-semibold"
                    >
                        {title}
                    </span>
                    <span className="self-center pt-[0.24rem] text-zinc-500 text-[0.62rem] leading-3">{description}</span>
                </div>
                {rightNode}
            </Sheet>
        )
    }
}