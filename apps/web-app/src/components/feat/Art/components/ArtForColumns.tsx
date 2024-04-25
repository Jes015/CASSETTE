import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button/Button"
import { Sheet } from "@/components/ui/Sheet"
import { BaseComponentType } from "@/models/component.model"
import { frontRoutes } from "@/models/routes.model"
import { IconHeart, IconHeartFilled, IconShoppingCart } from "@tabler/icons-react"
import { RoundedPlaySong } from "../../RoundedPlaySong/RoundedPlaySong"

export const ArtForColumns: BaseComponentType = (props) => {

    const liked = true
    const handleOnClickToPlayArt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
    }

    return (
        <Sheet
            as="a"
            href={frontRoutes.dynamics.art({ artistName: 'joyolababy', artName: 'nollia' })}
            border="bottom"
            rounded="none"
            className="gap-2 items-center hover:bg-bg-primary/70 cursor-pointer"
        >
            <RoundedPlaySong />
            <div className="flex flex-col justify-center gap-2 flex-grow">
                <div className="flex flex-col gap-[0.01rem] items-start">
                    <div className="flex gap-[0.1rem] items-center">
                        <span className="font-semibold text-base leading-4">Niaaaaa</span>
                        <Badge className="mt-1 scale-95">Beat</Badge>
                    </div>
                    <div>
                        <Badge className="scale-95" color="primary">Regueton</Badge>
                        <Badge className="scale-95" color="primary">92 BPM</Badge>
                    </div>
                </div>
            </div>
            <div
                className="flex items-center gap-1"
            >
                <Button
                    onClick={handleOnClickToPlayArt}
                >
                    {liked ? <IconHeartFilled className="text-[#ff5c5c]" width={18} height={18} /> : <IconHeart width={18} height={18} />}
                </Button>
                <Button
                    onClick={handleOnClickToPlayArt}
                >
                    <IconShoppingCart width={18} height={18} />
                </Button>
            </div>
        </Sheet>
    )
}