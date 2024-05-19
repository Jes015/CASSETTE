'use client'
import { Image } from "@/components/ui/Image/Image"
import { BaseComponentProps } from "@/models/component.model"
import { songPlayerService } from "@/services/client/song-player.client-service"
import { IconPlayerPlayFilled } from "@tabler/icons-react"
import clsx from "clsx"
import { FC, MouseEvent } from "react"

interface RoundedPlaySongProps extends BaseComponentProps {
    art?: string
    size?: 'small' | 'big'
}

export const RoundedPlaySong: FC<RoundedPlaySongProps> = ({ art = 'https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg', size = 'small', className, ...props }) => {

    const handleOnClickToPlayArt = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()

        songPlayerService.sendMessage({ detail: 'only-player' })
    }

    return (
        <div
            onClick={handleOnClickToPlayArt}
            className={
                clsx(
                    "relative overflow-hidden rounded-full",
                    size === 'big' && 'w-40 h-40',
                    size === 'small' && 'w-14 h-14'
                )
            }
            {...props}
        >
            <Image
                loading="eager"
                width={size === 'big' ? 160 : 90}
                height={size === 'big' ? 160 : 90}
                src="/tainy.webp"
                alt=""
                className={
                    clsx(
                        "!rounded-full w-14 h-14 aspect-square object-cover",
                        size === 'big' && 'w-40 !h-40',
                        size === 'small' && 'w-14 !h-14'
                    )
                }
            />
            <div
                className="flex justify-center items-center w-full h-full absolute top-0 left-0"
            >
                <button
                    onClick={handleOnClickToPlayArt}
                    className="z-40 flex items-center w-full h-full justify-center rounded-full bg-bg-primary/80 p-2 opacity-40 hover:opacity-85 transition-all"
                >
                    <IconPlayerPlayFilled
                        width={size === 'small' ? 28 : 54}
                        height={size === 'small' ? 28 : 54}
                    />
                </button>
            </div>
        </div>
    )
}