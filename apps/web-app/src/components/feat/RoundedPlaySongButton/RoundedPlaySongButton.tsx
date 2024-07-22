'use client'
import { RoundedButton, RoundedButtonType } from "@/components/ui/RoundedButton/RoundedButton"
import { songPlayerService } from "@/services/client/CustomEvents/song-player.client-service-custom-events"
import { IconPlayerPlayFilled } from "@tabler/icons-react"

export const RoundedPlaySongButton: RoundedButtonType = ({ onClick, icon, ...props }) => {
    const handleOnClickToPlayArt = () => {
        songPlayerService.sendMessage({ detail: 'only-player' })
    }

    return (
        <RoundedButton
            onClick={handleOnClickToPlayArt}
            icon={<IconPlayerPlayFilled />}
            rounded={true}
            {...props}
        />
    )
}