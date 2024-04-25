import { RoundedPlaySong } from "@/components/feat/RoundedPlaySong/RoundedPlaySong"
import { PartialSectionType, Section } from "@/components/ui/Section/Section"
import clsx from "clsx"

export const SongInfoSection: PartialSectionType = ({ className, ...props }) => {
    return (
        <Section
            title="Song DATA"
            className={
                clsx(
                    "flex gap-2 flex-grow",
                    className
                )
            }
            type="secondary"
            {...props}
        >
            <Section.Header
                title="Song info"
                type="secondary"
            />
            <Section.Content>
                <div className="flex-grow">
                    <RoundedPlaySong size="big" />
                </div>
            </Section.Content>
        </Section>
    )
}