import { Button } from "@/components/ui/Button/Button"
import { Section } from "@/components/ui/Section/Section"
import { PageType } from "@/models/page.model"
import { IconCamera, IconDna, IconMusic, IconVinyl } from "@tabler/icons-react"

const UploadPage: PageType = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
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
                        <Button className="flex items-center gap-1">
                            <IconVinyl className="text-zinc-200" />
                            <span className="font-medium text-zinc-300 text-xs">Beat</span>
                        </Button>
                        <Button className="flex items-center gap-1">
                            <IconCamera className="text-zinc-200" />
                            <span className="font-medium text-zinc-300 text-xs">Cover</span>
                        </Button>
                        <Button className="flex items-center gap-1">
                            <IconMusic className="text-zinc-200" />
                            <span className="font-medium text-zinc-300 text-xs">Melodies</span>
                        </Button>
                        <Button className="flex items-center gap-1">
                            <IconDna className="text-zinc-200" />
                            <span className="font-medium text-zinc-300 text-xs">Project files</span>
                        </Button>
                    </div>
                </Section.Content>
            </Section>
        </div>
    )
}

export default UploadPage