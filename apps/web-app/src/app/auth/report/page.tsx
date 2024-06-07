import { Badge } from "@/components/ui/Badge"
import { Section } from "@/components/ui/Section/Section"
import { PageType } from "@/models/routing/page.model"

const ReportPage: PageType = (props) => {
    return (
        <div className="flex flex-col gap-1">
            <Badge className="flex justify-center">Not available yet</Badge>
            <Section
                type="secondary"
                className="!gap-0 w-[300px]"
            >
                <Section.Header
                    title="Report auth bug"
                    type="secondary"
                />
                <Section.Content className="flex flex-col p-1 text-xs">
                    This section is available only for people who has sold or bought more than 100 dolares on CASSETE. This is because of the avoid bots rules.
                </Section.Content>
            </Section>
        </div>
    )
}

export default ReportPage