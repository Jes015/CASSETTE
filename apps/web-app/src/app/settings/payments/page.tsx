import { Section } from "@/components/ui/Section/Section"
import { PageType } from "@/models/routing/page.model"

const SettingsPaymentsPage: PageType = (props) => {
    return (
        <Section
            type="secondary"
            className="gap-0 flex-grow"
        >
            <Section.Header
                title="Payments"
                type="secondary"
            />
            <Section.Content
                className="w-full flex justify-center gap-[0.2rem] p-1"
            >
                <div className="flex flex-col items-center justify-center">
                    Payments
                </div>
            </Section.Content>
        </Section>
    )
}

export default SettingsPaymentsPage