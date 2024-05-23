import { PartialSectionProps, Section } from "@/components/ui/Section/Section"
import { PartialSectionHeaderProps } from "@/components/ui/Section/components/SectionHeader"
import clsx from "clsx"
import { FC } from "react"

interface ColumnArtProps extends PartialSectionProps {
    headerProps: PartialSectionHeaderProps
}

export const ColumnArt: FC<ColumnArtProps> = ({ className, headerProps, children, ...props }) => {
    return (
        <Section
            type="secondary"
            className={
                clsx(
                    "!gap-0 min-w-80 !border-b-0",
                    className
                )
            }
            {...props}
        >
            <Section.Header
                title="Activity"
                type="secondary"
                description="Recent content of the artist"
                {...headerProps}
            />
            <Section.Content
                className="flex-col !gap-0"
            >
                {children}
            </Section.Content>
        </Section>
    )
}