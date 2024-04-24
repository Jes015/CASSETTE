import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button/Button"
import { Sheet } from "@/components/ui/Sheet"
import { BaseComponentType } from "@/models/component.model"
import { PlayIcon } from "@radix-ui/react-icons"
import { IconShoppingCart } from "@tabler/icons-react"

export const ArtForColumns: BaseComponentType = (props) => {
    const handleOnClickToPlayArt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
    }
    return (
        <Sheet
            border="bottom"
            rounded="none"
            className="gap-2 items-center"
        >
            <div
                className="relative"
            >
                <img
                    src="https://i.ytimg.com/vi/ssdN7ZfavHs/maxresdefault.jpg" alt=""
                    className="rounded-full w-14 h-14 aspect-square object-cover"
                />
                <div
                    className="flex justify-center items-center w-full h-full absolute top-0 left-0"
                >
                    <button
                        onClick={handleOnClickToPlayArt}
                        className="flex items-center w-full h-full justify-center rounded-full bg-bg-primary/80 p-2 opacity-40 hover:opacity-80 transition-all"
                    >
                        <PlayIcon width={28} height={28} />
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-2 flex-grow">
                <div className="flex flex-col gap-[0.01rem] items-start">
                    <div className="flex gap-[0.1rem] items-center">
                        <span className="font-semibold leading-4">Niaaaaa</span>
                        <Badge className="mt-1 scale-95">Beat</Badge>
                    </div>
                    <div>
                        <Badge className="scale-95" color="primary">Regueton</Badge>
                        <Badge className="scale-95" color="primary">92 BPM</Badge>
                    </div>
                </div>
            </div>
            <div>
                <Button>
                    <IconShoppingCart width={18} height={18} />
                </Button>
            </div>
        </Sheet>
    )
}