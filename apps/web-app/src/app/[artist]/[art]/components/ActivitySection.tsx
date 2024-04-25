import { Art } from "@/components/feat/Art/Art"
import { PartialSectionType, Section } from "@/components/ui/Section/Section"
import clsx from "clsx"

export const ActivitySection: PartialSectionType = ({ className, ...props }) => {
    return (
        <Section
            type="secondary"
            className={
                clsx(
                    "!gap-0",
                    className
                )
            }
            {...props}
        >
            <Section.Header
                title="Activity"
                type="secondary"
                description="Recent content of the artist"
            />
            <Section.Content
                className="flex-col !gap-0"
            >
                <Art type="column" />
                <Art type="column" />
                <Art type="column" />
                <Art type="column" />
                <Art type="column" />
                <Art type="column" />
                <Art type="column" />
            </Section.Content>
        </Section>
    )
}