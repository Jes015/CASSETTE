'use client'
import { Image } from "@/components/ui/Image/Image"
import { BaseComponentProps } from "@/models/component.model"
import { songPlayerService } from "@/services/client/song-player.client-service"
import { IconPlayerPlayFilled } from "@tabler/icons-react"
import clsx from "clsx"
import { FC, MouseEvent } from "react"

interface RoundedPlaySongProps extends BaseComponentProps {
    art?: string
    size?: 'small' | 'big' | 'resize'
    rounded?: boolean
}

export const PlaySongButton: FC<RoundedPlaySongProps> = ({ art = 'https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg', size = 'small', className, rounded = true, ...props }) => {

    const handleOnClickToPlayArt = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()

        songPlayerService.sendMessage({ detail: 'only-player' })
    }

    return (
        <div
            className={
                clsx(
                    "relative overflow-hidden",
                    rounded && 'rounded-full',
                    size === 'big' && 'w-40 h-40',
                    size === 'small' && 'w-14 h-14',
                    size === 'resize' && 'aspect-square !h-40'
                )
            }
            {...props}
        >
            <Image
                loading="eager"
                width={size === 'big' ? 160 : size === 'resize' ? 400 : 90}
                height={size === 'big' ? 160 : size === 'resize' ? 400 : 90}
                src="/tainy.webp"
                alt=""
                className={
                    clsx(
                        "aspect-square object-cover",
                        rounded ? '!rounded-full' : '!rounded-none',
                        size === 'big' && 'w-40 !h-40',
                        size === 'small' && 'w-14 !h-14',
                        size === 'resize' && '!w-full !h-40'
                    )
                }
            />
            <div
                className="flex justify-center items-center w-full h-full absolute top-0 left-0 z-0"
            >
                <button
                    onClick={handleOnClickToPlayArt}
                    className={
                        clsx(
                            "z-40 flex items-center w-full h-full justify-center bg-bg-primary/80 p-2 opacity-40 hover:opacity-85 transition-all",
                            rounded && 'rounded-full'
                        )
                    }
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