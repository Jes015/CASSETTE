import { PlayIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { FC } from "react"
import { PartialSheetProps, Sheet } from "./Sheet"
import { Tooltip } from "./Tooltip/Tooltip"

export const Art: FC<PartialSheetProps> = ({ className, ...props }) => {
    return (
        <article
            className={
                clsx(
                    "select-none flex flex-col !p-0 rounded-sm w-44 overflow-hidden cursor-pointer hover:scale-105 transition-transform",
                    className
                )
            }
            {...props}
        >
            <header className="relative">
                <img className="w-full aspect-square object-cover" src="https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg" />
                <div className="flex flex-col absolute w-full h-full bottom-0 right-0">
                    <div
                        className="flex justify-between px-2 py-1"
                    >
                        <span className="font-bold [text-shadow:1px_1px_0px_rgb(105,105,105)]">Regueton</span>
                        <span className="font-extrabold [text-shadow:1px_1px_0px_rgb(105,105,105)]">92 BPM</span>
                    </div>
                    <div className="flex justify-center items-center flex-grow">
                        <button className="flex items-center justify-center rounded-full bg-bg-primary/80 p-2 opacity-70 hover:opacity-100 hover:scale-110 transition-transform">
                            <PlayIcon width={28} height={28}/>
                        </button>
                    </div>
                </div>
            </header>
            <Sheet
                as="footer"
                border="top"
                rounded="none"
                className="px-2 py-1 !border-0 overflow-hidden"
            >
                <img className="absolute top-0 blur-xl opacity-50 w-24 aspect-square object-cover" src="https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg" />
                <div
                    className="flex items-center w-full justify-between z-20 font-bold py-1"
                >
                    <div className="flex-grow-0">
                        <Tooltip
                            trigger={
                                <span className="[text-shadow:1px_1px_0px_rgb(105,105,105)]">
                                    Song
                                </span>
                            }
                            content={
                                <span className="text-xs font-semibold">
                                    Song
                                </span>
                            }
                            contentProps={{
                                side: 'bottom'
                            }}
                        />
                    </div>
                    <div className="flex items-center flex-shrink-0 gap-[0.1rem]">
                        <span
                            className="text-[0.6rem] text-zinc-300"
                        >
                            By
                        </span>
                        <span
                            className="text-xs font-semibold text-blue-100 cursor-pointer"
                        >
                            Joyolababya
                        </span>
                    </div>
                </div>
            </Sheet>
        </article>
    )
}