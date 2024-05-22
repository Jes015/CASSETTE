import { PartialSectionProps, Section } from "@/components/ui/Section/Section"
import { PartialSectionHeaderProps } from "@/components/ui/Section/components/SectionHeader"
import clsx from "clsx"
import { FC } from "react"

interface RowArtProps extends PartialSectionProps {
    headerProps: PartialSectionHeaderProps
}

export type RowArtPropsPartial = Partial<RowArtProps>

export type RowArtTypePartial = FC<RowArtPropsPartial>

export const RowArt: FC<RowArtProps> = ({ className, children, headerProps, ...props }) => {
    return (
        <Section
            className={
                clsx(
                    "!gap-0 min-w-80",
                    className
                )
            }
            {...props}
        >
            <Section.Header
                title="Activity"
                description="Recent content of the artist"
                {...headerProps}

            />
            <Section.Content
                className="!gap-0"
            >
                {children}
            </Section.Content>
        </Section>
    )
}