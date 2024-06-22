import { auth } from "@/auth"
import { ArtEntityArray } from "@/models/logic/art.model"
import { PageType } from "@/models/routing/page.model"
import { frontRoutes } from "@/models/routing/routes.model"
import { getAllArts } from "@/services/server/art.service"
import { ActivitySection } from "./components/ActivitySection"
import { ArtistInfoSection } from "./components/ArtistInfoSection"
import { FeaturedArtSection } from "./components/FeaturedArtSection/FeaturedArtSection"

const ArtistPage: PageType = async ({ params }) => {
    const artistUsernameParam = params?.[frontRoutes.static.artist.paramName]

    const session = await auth()

    const isProfileOwner = session?.user.user.username === artistUsernameParam

    const featuredArts: ArtEntityArray = await getAllArts()

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
                    <ArtistInfoSection user={session?.user.user!} {...{ isProfileOwner }} />
                    <FeaturedArtSection defaultArts={featuredArts} {...{ isProfileOwner }} />
                    <ActivitySection />
                </div>
            </div>
        </div>
    )
}

export default ArtistPage