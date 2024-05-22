import { Section } from "@/components/ui/Section/Section"
import { Title } from "@/components/ui/Title/Title"
import { PageType } from "@/models/page.model"
import { frontRoutes } from "@/models/routes.model"
import { ActivitySection } from "./components/ActivitySection"
import { ArtistInfoSection } from "./components/ArtistInfoSection"
import { SelectedByUserSection } from "./components/SelectedByUserSection"

const ArtistPage: PageType = ({ params }) => {
    const artistParam = params?.[frontRoutes.static.artist.paramName]

    console.log({ artistParam })
    return (
        <div
            className="flex items-start gap-4"
        >
            <div
                className="flex flex-col gap-3 flex-shrink-0"
            >
                <Section
                    type="secondary"
                >
                    <Section.Content
                        className="flex-col !gap-0 p-2 min-h-24"
                    >
                        <Title as="quaternary">Watch out my new video</Title>
                    </Section.Content>
                </Section>
                <ActivitySection />
            </div>
            <div
                className="flex flex-grow gap-2"
            >
                <div
                    className="flex flex-col flex-grow justify-start gap-2 overflow-hidden"
                >
                    <ArtistInfoSection />
                    <SelectedByUserSection />
                </div>
                <div className="flex flex-col gap-2">
                    <Section
                        type="secondary"
                    >
                        <Section.Content
                            className="flex-col !gap-0 p-2 min-h-24"
                        >
                            <Title as="quaternary">Watch out my new video</Title>
                        </Section.Content>
                    </Section>
                    <ActivitySection />
                    <ActivitySection />
                </div>
            </div>
        </div>
    )
}

export default ArtistPage