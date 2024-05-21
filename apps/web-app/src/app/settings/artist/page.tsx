import { Section } from "@/components/ui/Section/Section"
import { PageType } from "@/models/page.model"

const SettingsArtistPage: PageType = (props) => {
    return (
        <Section
            type="secondary"
            className="gap-0 flex-grow"
        >
            <Section.Header
                title="Artist"
                type="secondary"
            />
            <Section.Content
                className="w-full flex flex-col gap-[0.2rem] p-1"
            >
                aaaaa
            </Section.Content>
        </Section>
    )
}

export default SettingsArtistPage