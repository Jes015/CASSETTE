import { Badge } from "@/components/ui/Badge"
import { Sheet } from "@/components/ui/Sheet"
import { Title } from "@/components/ui/Title/Title"
import { BaseComponentType } from "@/models/component.model"
import { frontRoutes } from "@/models/routes.model"
import { RoundedPlaySong } from "../../RoundedPlaySong/RoundedPlaySong"
import { SongActions } from "../../SongActions/SongActions"

export const ArtForColumns: BaseComponentType = (props) => {

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
                        <Title as='quaternary'>Niaaaaa</Title>
                        <Badge className="mt-1 scale-95">Beat</Badge>
                    </div>
                    <div>
                        <Badge className="scale-95" color="primary">Regueton</Badge>
                        <Badge className="scale-95" color="primary">92 BPM</Badge>
                    </div>
                </div>
            </div>
            <SongActions size="small" />
        </Sheet>
    )
}