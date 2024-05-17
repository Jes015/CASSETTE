'use client'
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button/Button"
import { Section } from "@/components/ui/Section/Section"
import { BaseComponentType } from "@/models/component.model"
import { IconPlayerPlayFilled } from "@tabler/icons-react"
import clsx from "clsx"
import { SongActions } from "../SongActions/SongActions"
import { useSongPlayer } from "./hooks/useSongPlayer"

export const SongPlayer: BaseComponentType = (props) => {
    const { playerVisible, togglePlayerState } = useSongPlayer()

    const handleOnClickToClosePlayer = () => {
        togglePlayerState()
    }

    return (
        <Section
            type="secondary"
            className={clsx(
                "!fixed m-auto w-fit left-0 right-0 bottom-4 !rounded-md [transition-duration:0.3s] z-[50000] !bg-bg-primary/40 backdrop-blur-md",
                !playerVisible && 'translate-y-[120%]'
            )}
        >
            <Section.Header
                title="Song player"
                type="secondary"
                className="z-50 !bg-bg-primary/20"
            />
            <Section.Content className="px-4 py-2 relative">
                <img
                    src="https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg" alt=""
                    className={
                        clsx(
                            "rounded-full w-[120%] aspect-square object-cover absolute top-0 left-0 w-full blur-3xl z-0",
                        )
                    }
                />
                <div className="flex flex-col z-50">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg" alt=""
                            className={
                                clsx(
                                    "rounded-full w-20 aspect-square object-cover z-0",
                                )
                            }
                        />
                        <div className="flex gap-8 text-xs">
                            <div>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold text-xl leading-3">Playa</span>
                                    <Badge>Reggaeton</Badge>
                                </div>
                                <div>
                                    <span className="text-zinc-400 hover:underline">joyolababy</span>
                                </div>
                            </div>
                            <SongActions size="pretty-small" />
                        </div>
                    </div>
                    <div>
                        <progress value={40} className="h-1 bg-white text-white" />
                    </div>
                    <div className="flex justify-center gap-1 items-center">
                        <Button className="!rounded-full hover:!bg-bg-secondary/80">
                            <IconPlayerPlayFilled className="rotate-180 !text-zinc-300" width={14} height={14} />
                        </Button>
                        <Button className="!rounded-full hover:!bg-bg-secondary/80">
                            <IconPlayerPlayFilled />
                        </Button>
                        <Button className="!rounded-full hover:!bg-bg-secondary/80">
                            <IconPlayerPlayFilled width={14} height={14} />
                        </Button>
                    </div>
                </div>
            </Section.Content>
        </Section >
    )
}