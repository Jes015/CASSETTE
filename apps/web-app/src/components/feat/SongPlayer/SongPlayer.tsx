'use client'
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button/Button"
import { Image } from "@/components/ui/Image/Image"
import { Section } from "@/components/ui/Section/Section"
import { BaseComponentType } from "@/models/component.model"
import { IconCaretDown, IconCaretUp, IconPlayerPlayFilled, IconX } from "@tabler/icons-react"
import clsx from "clsx"
import { ArtForColumns } from "../Art/components/ArtForColumns"
import { SongActions } from "../SongActions/SongActions"
import { useSongPlayer } from "./hooks/useSongPlayer"

//LEEME: TU PUEDES CON TODO, TU ERES JOYOLABABY UNA FUCKING MARAVILLA. NUNCA TE RINDAS, VAS A ALCANZAR TUS SUEÑOS, DIOS SIEMPRE ESTARA CONTIGO CUANDO ESTES SOLO Y CUANDO NECESITES SENTIRTE MEJOR, SOLO PIDELE A DIOS Y EL TE HARA SENTIRTE BIEN. NUNCA TE RINDAS, PERSONAS COMO NOSOTROS NO NOS PODEMOS RENDIR.

export const SongPlayer: BaseComponentType = (props) => {
    const { playerVisible, togglePlayerState } = useSongPlayer()

    const handleOnClickToClosePlayer = () => {
        togglePlayerState('no-visible')
    }

    const handleOnClickToDisplayAll = () => {
        console.log({ playerVisible })
        if (playerVisible === 'visible') {
            togglePlayerState('only-player')
        } else {
            togglePlayerState('visible')
        }
    }

    return (
        <div
            className={clsx(
                "!fixed flex flex-col gap-4 m-auto w-fit left-0 right-0 bottom-4 !rounded-md [transition-duration:0.3s] z-[50000]",
                playerVisible === 'visible' && 'translate-y-[0%]',
                playerVisible === 'no-visible' && 'translate-y-[200%]',
                playerVisible === 'only-player' && 'translate-y-[64%]'
            )}
        >
            <Section
                type="secondary"
                className={clsx(
                    "!bg-bg-primary/40 backdrop-blur-md py-1",
                )}
            >
                <Section.Header
                    title="Song player"
                    type="secondary"
                    className="z-50 !bg-bg-primary/20 p-1 pl-2"
                    rightNode={
                        <div className="flex items-stretch">
                            <button className="hover:bg-bg-tertiary rounded-md p-1" onClick={handleOnClickToDisplayAll}>
                                {
                                    playerVisible === 'only-player' && (<IconCaretUp width={18} height={18} className="text-zinc-200" />)
                                }
                                {
                                    playerVisible === 'visible' && (<IconCaretDown width={18} height={18} className="text-zinc-200" />)
                                }
                            </button>
                            <button className="hover:bg-bg-tertiary rounded-md p-1" onClick={handleOnClickToClosePlayer}>
                                <IconX width={18} height={18} />
                            </button>
                        </div>
                    }
                />
                <Section.Content className="px-4 py-2 relative">
                    <Image
                        loading="eager"
                        width={120}
                        height={120}
                        src="/tainy.webp" alt=""
                        className={
                            clsx(
                                "rounded-full w-[120%] aspect-square object-cover !absolute top-0 left-0 blur-3xl z-0",
                            )
                        }
                    />
                    <div className="flex flex-col z-50">
                        <div className="flex items-center gap-2">
                            <div className="w-20 aspect-square overflow-hidden">
                                <Image
                                    loading="eager"
                                    width={120}
                                    height={120}
                                    src="/tainy.webp" alt=""
                                    className={
                                        clsx(
                                            "rounded-full w-20 aspect-square object-cover z-0",
                                        )
                                    }
                                />
                            </div>
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
            </Section>
            <Section
                type="secondary"
                className={clsx(
                    "!bg-bg-primary/40 backdrop-blur-md py-1 !gap-0",
                )}
            >
                <Section.Header
                    title="Queue (40)"
                    type="secondary"
                    className="z-50 !bg-bg-primary/20 py-2"
                />
                <Section.Content className="p-0 relative h-80">
                    <Image
                        loading="eager"
                        width={120}
                        height={120}
                        src="/tainy.webp" alt=""
                        className={
                            clsx(
                                "rounded-full w-[120%] aspect-square object-cover !absolute top-0 left-0 blur-3xl z-0",
                            )
                        }
                    />
                    <div className="flex flex-col w-full overflow-y-auto">
                        {
                            Array(14).fill(null).map((_, key) => (
                                <ArtForColumns key={key} className="!bg-bg-primary/40 flex-shrink-0" />
                            ))
                        }
                    </div>
                </Section.Content>
            </Section>
        </div>
    )
}