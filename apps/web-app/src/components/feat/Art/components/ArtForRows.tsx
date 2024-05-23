import { Badge } from "@/components/ui/Badge"
import { Link, LinkPartialType } from "@/components/ui/Link/Link"
import { Title } from "@/components/ui/Title/Title"
import { frontRoutes } from "@/models/routes.model"
import clsx from "clsx"
import { RoundedPlaySong } from "../../RoundedPlaySong/RoundedPlaySong"
import { SongActions } from "../../SongActions/SongActions"

export const ArtForRows: LinkPartialType = ({ className, ...props }) => {

    return (
        <Link
            href={frontRoutes.dynamics.art({ artistName: 'joyolababy', artName: 'nollia' })}
            className={
                clsx(
                    "gap-2 !no-underline items-center cursor-pointer bg-transparent p-2 relative overflow-hidden flex flex-col justify-center transition-all rounded-none",
                    className
                )
            }
        >
            <RoundedPlaySong size="big" />
            <div className="flex flex-col justify-center gap-2 flex-grow">
                <div className="flex flex-col gap-[0.01rem] items-start">
                    <div className="flex gap-[0.1rem] items-center">
                        <Title as='quaternary'>Niaaaaa</Title>
                        <Badge className="mt-1 scale-95">Beat</Badge>
                    </div>
                    <div className="flex items-start">
                        <Badge className="scale-95" styles="primary">Regueton</Badge>
                        <Badge className="scale-95" styles="primary">92 BPM</Badge>
                    </div>
                </div>
                <SongActions size="pretty-small" />
            </div>
        </Link>
    )
}