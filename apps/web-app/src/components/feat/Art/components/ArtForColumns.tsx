import { Badge } from "@/components/ui/Badge"
import { Link } from "@/components/ui/Link/Link"
import { Title } from "@/components/ui/Title/Title"
import { BaseComponentType } from "@/models/component.model"
import { frontRoutes } from "@/models/routes.model"
import clsx from "clsx"
import { PlaySongButton } from "../../PlaySongButton/PlaySongButton"
import { SongActions } from "../../SongActions/SongActions"

export const ArtForColumns: BaseComponentType = ({ className }) => {

    return (
        <Link
            href={frontRoutes.dynamics.art({ artistName: 'joyolababy', artName: 'nollia' })}
            className={
                clsx(
                    "gap-2 !no-underline items-center hover:bg-bg-primary/70 cursor-pointer bg-bg-secondary border-border-primary/40 p-2 relative overflow-hidden flex justify-center transition-all border-b-2 rounded-none",
                    className
                )
            }
        >
            <PlaySongButton />
            <div className="flex flex-col justify-center gap-2 flex-grow">
                <div className="flex flex-col gap-[0.01rem] items-start">
                    <div className="flex gap-[0.1rem] items-center">
                        <Title as='quaternary'>Niaaaaa</Title>
                        <Badge className="mt-1 scale-95">Beat</Badge>
                    </div>
                    <div>
                        <Badge className="scale-95" styles="primary">Regueton</Badge>
                        <Badge className="scale-95" styles="primary">92 BPM</Badge>
                    </div>
                </div>
            </div>
            <SongActions size="small" />
        </Link>
    )
}