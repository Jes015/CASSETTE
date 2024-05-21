import { PageType } from "@/models/page.model"
import { frontRoutes } from "@/models/routes.model"

const ArtistPage: PageType = ({ params }) => {
    const artistParam = params?.[frontRoutes.static.artist.paramName]

    console.log(artistParam)
    
    return (
        <div>Artist : {artistParam}</div>
    )
}

export default ArtistPage