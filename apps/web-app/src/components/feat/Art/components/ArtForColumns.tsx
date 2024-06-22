import { Badge } from "@/components/ui/Badge"
import { Link } from "@/components/ui/Link/Link"
import { Title } from "@/components/ui/Title/Title"
import { ArtEntity } from "@/models/logic/art.model"
import { frontRoutes } from "@/models/routing/routes.model"
import { BaseComponentProps } from "@/models/ui/component.model"
import clsx from "clsx"
import { FC } from "react"
import { PlaySongButton } from "../../PlaySongButton/PlaySongButton"
import { SongActions } from "../../SongActions/SongActions"

interface ArtForColumns extends BaseComponentProps {
    data: ArtEntity
    isProfileOwner: boolean
}

export const ArtForColumns: FC<ArtForColumns> = ({ className, data, isProfileOwner, ...props }) => {

    return (
        <Link
            href={frontRoutes.dynamics.art({ artistName: data?.owner?.username, artName: data?.title })}
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
                        <Title as='quaternary'>{data?.title}</Title>
                        <Badge className="mt-1 scale-95">{data?.type}</Badge>
                    </div>
                    <div>
                        <Badge className="scale-95" variant="primary">Regueton</Badge>
                        <Badge className="scale-95" variant="primary">92 BPM</Badge>
                    </div>
                </div>
            </div>
            <SongActions {...{ isProfileOwner }} size="small" />
        </Link>
    )
}