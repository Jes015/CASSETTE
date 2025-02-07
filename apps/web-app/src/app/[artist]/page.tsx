import { auth } from "@/auth"
import { ArtEntityArray, FeaturedArtArray } from "@/models/logic/art.model"
import { User } from "@/models/logic/user.model"
import { PageProps, PageType } from "@/models/routing/page.model"
import { frontRoutes } from "@/models/routing/routes.model"
import { getFeaturedUserArts, getUserArts } from "@/services/server/art.service"
import { checkSession } from "@/services/server/auth.service"
import { getUserData } from "@/services/server/user.service"
import { Metadata, ResolvingMetadata } from "next"
import { ActivitySection } from "./components/ActivitySection"
import { ArtistInfoSection } from "./components/ArtistInfoSection/ArtistInfoSection"
import { FeaturedArtSection } from "./components/FeaturedArtSection/FeaturedArtSection"

export const revalidate = 0

export async function generateMetadata(
    { params, searchParams }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const artistUsernameParam = params?.[frontRoutes.static.artist.paramName]

    return {
        title: artistUsernameParam
    }
}

const ArtistPage: PageType = async ({ params }) => {
    await checkSession()

    const artistUsernameParam = params?.[frontRoutes.static.artist.paramName]
    const session = await auth()
    const isProfileOwner = session?.user.user.username === artistUsernameParam

    const userData: User | null = await getUserData(artistUsernameParam)

    if (userData == null) {
        return 'User not found'
    }

    const featuredArts: FeaturedArtArray = await getFeaturedUserArts(userData.id)

    const userArts: ArtEntityArray = await getUserArts(userData.id)

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
                    <ArtistInfoSection defaultUserData={userData} {...{ isProfileOwner }} />
                    {
                        (isProfileOwner || (!isProfileOwner && featuredArts.length > 0)) && (
                            <FeaturedArtSection userId={userData.id} featuredArtList={featuredArts} userArts={userArts} {...{ isProfileOwner }} />
                        )
                    }
                    <ActivitySection userArts={userArts} />
                </div>
            </div>
        </div>
    )
}

export default ArtistPage