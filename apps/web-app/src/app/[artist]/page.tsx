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
                className="flex flex-grow gap-2 max-w-[800px] overflow-hidden m-auto"
            >
                <div
                    className="flex flex-col flex-grow justify-start gap-2 overflow-hidden"
                >
                    <ArtistInfoSection />
                    <SelectedByUserSection />
                    <ActivitySection />
                </div>
            </div>
        </div>
    )
}

export default ArtistPage