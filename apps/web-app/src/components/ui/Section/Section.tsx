import { BaseComponentProps } from "@/models/ui/component.model"
import clsx from "clsx"
import { FC } from "react"
import { Sheet } from "../Sheet"
import { SectionContent } from "./components/SectionContent"
import { SectionHeader } from "./components/SectionHeader"

interface SectionProps extends BaseComponentProps {
    type?: 'main' | 'secondary' | 'tertiary'
}

export type PartialSectionProps = Partial<SectionProps>

export type PartialSectionType = FC<PartialSectionProps>

export const Section = ({ type = 'secondary', className, ...props }: SectionProps) => {
    return (
        <Sheet
            className={
                clsx(
                    "flex flex-col gap-1 overflow-hidden",
                    type === 'secondary' && '!p-0 !bg-bg-secondary',
                    type === 'main' && '!border-0 !bg-transparent',
                    type === 'tertiary' && '!bg-bg-secondary/80',
                    className
                )
            }
            {...props}
        />
    )
}


Section.Header = SectionHeader
Section.Content = SectionContent