import { songPlayerService } from "@/services/client/CustomEvents/song-player.client-service-custom-events"
import { useEffect, useState } from "react"

export type PlayerVisibleStatus = 'no-visible' | 'only-player' | 'visible'

export const useSongPlayer = () => {
    const [playerVisible, setPlayerVisible] = useState<PlayerVisibleStatus>('no-visible')

    useEffect(() => {
        songPlayerService.listenEvent((details) => {
            if (details?.detail == null) return

            togglePlayerState(details.detail)
        })

        return () => {
            songPlayerService.removeEvent()
        }
    }, [])

    const togglePlayerState = (newState: PlayerVisibleStatus) => {
        setPlayerVisible(newState)
    }

    return { togglePlayerState, playerVisible }
}