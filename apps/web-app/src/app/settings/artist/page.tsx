import { Image } from "@/components/ui/Image/Image"
import { Input } from "@/components/ui/Input/Input"
import { Section } from "@/components/ui/Section/Section"
import { TextField } from "@/components/ui/TextField/TextField"
import { PageType } from "@/models/routing/page.model"
import clsx from "clsx"

const SettingsArtistPage: PageType = (props) => {
    return (
        <Section className="gap-0 flex-grow">
            <Section.Header
                title="Artist"
            />
            <Section.Content
                className="w-full flex flex-col gap-[0.2rem] p-1"
            >
                <div className="flex gap-2">
                    <div className="w-20 aspect-square rounded-full overflow-hidden">
                        <Image
                            loading="eager"
                            width={120}
                            height={120}
                            src="/tainy.webp" alt=""
                            className={
                                clsx(
                                    "rounded-full w-20 aspect-square object-cover z-0",
                                )
                            }
                        />
                    </div>
                    <TextField as="tertiary">
                        <TextField.Label className="font-medium text-text-secondary">Username</TextField.Label>
                        <Input className="outline-none bg-transparent font-bold text-2xl text-text-secondary focus-within:text-text-primary hover:text-text-primary transition-colors" />
                    </TextField>
                </div>
            </Section.Content>
        </Section>
    )
}

export default SettingsArtistPage