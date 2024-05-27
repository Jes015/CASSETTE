import { Link } from "@/components/ui/Link/Link"
import { Section } from "@/components/ui/Section/Section"
import { PageType } from "@/models/page.model"
import { frontRoutes } from "@/models/routes.model"
import { IconDna, IconMusic, IconRectangle, IconVinyl } from "@tabler/icons-react"


const uploadSubRoutes = [
    {
        ...frontRoutes.static.upload.subRoutes.beat,
        icon: IconVinyl
    },
    {
        ...frontRoutes.static.upload.subRoutes.cover,
        icon: IconRectangle
    },
    {
        ...frontRoutes.static.upload.subRoutes.melodies,
        icon: IconMusic
    },
    {
        ...frontRoutes.static.upload.subRoutes.projectFiles,
        icon: IconDna
    },
]
const UploadPage: PageType = () => {
    return (
        <Section
            type="secondary"
            className="m-auto !w-fit !gap-0"
        >
            <Section.Header
                title="Select the type of art to upload"
                type="secondary"
            />
            <Section.Content
                className="p-1"
            >
                <div className="grid grid-cols-2 gap-1">
                    {
                        uploadSubRoutes.map((uploadRoute) => (
                            <Link
                                href={uploadRoute.path}
                                key={uploadRoute.name}
                                variant="button"
                            >
                                <uploadRoute.icon className="text-zinc-200" />
                                <span className="font-medium text-zinc-300 text-xs">{uploadRoute.name}</span>
                            </Link>
                        ))
                    }
                </div>
            </Section.Content>
        </Section>
    )
}

export default UploadPage