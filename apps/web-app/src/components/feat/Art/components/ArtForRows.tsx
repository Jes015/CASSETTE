import { Link } from "@/components/ui/Link/Link"
import { Text } from "@/components/ui/Text/Text"
import { Title } from "@/components/ui/Title/Title"
import { frontRoutes } from "@/models/routing/routes.model"
import clsx from "clsx"
import { RoundedPlaySongButton } from "../../RoundedPlaySongButton/RoundedPlaySongButton"
import { SongActions } from "../../SongActions/SongActions"
import { ArtForColumnsAndRowsType } from "../Art"


export const ArtForRows: ArtForColumnsAndRowsType = ({ className, data, isProfileOwner = false, ...props }) => {

    return (
        <Link
            href={frontRoutes.dynamics.art({ artistName: data?.owner?.username, artName: data?.title })}
            className={
                clsx(
                    "w-[170px] flex-shrink-0 !no-underline items-stretch cursor-pointer bg-transparent rounded-md overflow-hidden relative flex flex-col justify-center transition-all border-2 border-border-secondary bg-bg-secondary hover:bg-bg-tertiary/50",
                    className
                )
            }
        >
            <RoundedPlaySongButton
                imageProps={{
                    src: data?.imageLink ?? '/tainy.webp',
                    alt: 'art\'s' + data?.title + 'image'
                }}
                size="big"
                rounded={false}
                
            />
            <div className="flex justify-between items-center gap-2 flex-grow px-1 py-2 transition-colors">
                <div className="flex flex-col gap-[0.01rem] items-start">
                    <div className="flex flex-col">
                        <div className="flex gap-[0.1rem] items-center">
                            <Title as='quaternary'>{data?.title}</Title>
                        </div>
                        <Text className="pl-[0.1rem]" as="quaternary">{data?.owner?.username}</Text>
                    </div>
                </div>
                <SongActions isProfileOwner={isProfileOwner} size="pretty-small" />
            </div>
        </Link>
    )
}