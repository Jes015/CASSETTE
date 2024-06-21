import { auth } from "@/auth"
import { PageType } from "@/models/routing/page.model"
import { frontRoutes } from "@/models/routing/routes.model"
import { ActivitySection } from "./components/ActivitySection"
import { ArtistInfoSection } from "./components/ArtistInfoSection"
import { SelectedByUserSection } from "./components/SelectedByUserSection"

const ArtistPage: PageType = async ({ params }) => {
    const artistUsernameParam = params?.[frontRoutes.static.artist.paramName]

    const session = await auth()
    
    const isProfileOwner = session?.user.user.username === artistUsernameParam

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
                    <SelectedByUserSection />
                    <ActivitySection />
                </div>
            </div>
        </div>
    )
}

export default ArtistPage