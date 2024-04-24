import { Art } from "@/components/feat/Art/Art"
import { Badge } from "@/components/ui/Badge"
import { Section } from "@/components/ui/Section/Section"
import { Sheet } from "@/components/ui/Sheet"
import { PageType } from "@/models/page.model"
import { frontRoutes } from "@/models/routes.model"

const ArtPage: PageType = ({ params }) => {
    const artistParam = params?.[frontRoutes.static.artist.paramName]
    const artParam = params?.[frontRoutes.static.art.paramName]

    console.log({ artParam, artistParam })
    return (
        <div
            className="flex items-start gap-4"
        >
            <div
                className="flex flex-col gap-3 flex-shrink-0"
            >
                <Sheet
                    className="flex-shrink-0 flex gap-2 px-2 !border-border-primary"
                >
                    <div>
                        <img
                            src="https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg" alt=""
                            className="rounded-full w-16 aspect-square object-cover"
                        />
                    </div>
                    <div className="flex flex-col max-w-64 justify-center">
                        <span className="font-semibold text-base">Joyolababy</span>
                        <span className="text-zinc-400 text-xs font-medium">Cantante productor y escritor</span>
                        <div className="flex gap-1 items-start flex-wrap mt-1">
                            <Badge color="primary">Singer</Badge>
                            <Badge color="primary">Producer</Badge>
                            <Badge color="primary">Writer</Badge>
                            <Badge color="primary">Painter</Badge>
                            <Badge color="primary">Designer</Badge>
                        </div>
                    </div>
                </Sheet>
                <Section
                    title="Activity"
                    description="Recent content of the artist"
                    type="secondary"
                    className="!gap-0"
                >
                    <Section.Content
                        className="flex flex-col"
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
            </div>
            <Sheet
                className="flex gap-2 flex-grow"
            >
                <img
                    src="https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg" alt=""
                    className="rounded-md w-80 aspect-square object-cover"
                />
                <div className="flex-grow">
                    aaaa
                </div>
            </Sheet>
        </div>
    )
}

export default ArtPage