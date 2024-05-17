'use client'
import { BaseComponentProps } from "@/models/component.model"
import { songPlayerService } from "@/services/client/song-player.client-service"
import { IconPlayerPlayFilled } from "@tabler/icons-react"
import clsx from "clsx"
import { FC } from "react"
import styles from './roundedPlaySong.module.css'

interface RoundedPlaySongProps extends BaseComponentProps {
    art?: string
    size?: 'small' | 'big'
}

export const RoundedPlaySong: FC<RoundedPlaySongProps> = ({ art = 'https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg', size = 'small', className, ...props }) => {

    const handleOnClickToPlayArt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()

        songPlayerService.sendMessage({ detail: true })
    }

    return (
        <div
            onClick={handleOnClickToPlayArt}
            className={
                clsx(
                    "relative",
                    size === 'big' && 'w-40 h-40',
                    size === 'small' && 'w-14 h-14'
                )
            }
            {...props}
        >
            <img
                src="https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg" alt=""
                className={
                    clsx(
                        "rounded-full w-14 h-14 aspect-square object-cover",
                        size === 'big' && 'w-40 h-40',
                        size === 'small' && 'w-14 h-14'
                    )
                }
            />
            <div
                className="flex justify-center items-center w-full h-full absolute top-0 left-0"
            >
                <div
                    className={
                        clsx(
                            "absolute z-20",
                            styles.circularProgressBar,
                            size === 'small' && 'circularProgressBar--small',
                            size === 'big' && 'circularProgressBar--big',
                        )
                    }
                    style={{
                        // @ts-expect-error The property --bar-width is for the width of the loader bard
                        '--bar-width': size === 'big' ? '20px' : '10px',
                        '--progress': '84%'
                    }}
                >
                </div>
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