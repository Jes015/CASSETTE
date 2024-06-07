import { Link, LinkPartialType } from "@/components/ui/Link/Link"
import { SubTitle } from "@/components/ui/SubTitle/SubTitle"
import { Title } from "@/components/ui/Title/Title"
import { frontRoutes } from "@/models/routing/routes.model"
import clsx from "clsx"
import { PlaySongButton } from "../../PlaySongButton/PlaySongButton"
import { SongActions } from "../../SongActions/SongActions"

export const ArtForRows: LinkPartialType = ({ className, ...props }) => {

    return (
        <Link
            href={frontRoutes.dynamics.art({ artistName: 'joyolababy', artName: 'nollia' })}
            className={
                clsx(
                    "w-[170px] flex-shrink-0 !no-underline items-stretch cursor-pointer bg-transparent rounded-md overflow-hidden relative flex flex-col justify-center transition-all border-2 border-border-secondary bg-bg-secondary hover:bg-bg-tertiary/50",
                    className
                )
            }
            {...props}
        >
            <PlaySongButton rounded={false} size="resize" />
            <div className="flex justify-between items-center gap-2 flex-grow px-1 py-2 transition-colors">
                <div className="flex flex-col gap-[0.01rem] items-start">
                    <div className="flex flex-col">
                        <div className="flex gap-[0.1rem] items-center">
                            <Title as='quaternary'>Niaaaaa</Title>
                        </div>
                        <SubTitle className="pl-[0.1rem]" as="quaternary">joyolababy</SubTitle>
                    </div>
                </div>
                <SongActions size="pretty-small" />
            </div>
        </Link>
    )
}