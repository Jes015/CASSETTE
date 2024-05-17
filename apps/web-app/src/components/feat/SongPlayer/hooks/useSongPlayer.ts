import { songPlayerService } from "@/services/client/song-player.client-service"
import { useEffect, useState } from "react"

export const useSongPlayer = () => {
    const [playerVisible, setPlayerVisible] = useState(false)

    useEffect(() => {
        songPlayerService.listenEvent((details) => {
            if (details == null) return

            togglePlayerState(details.detail)
        })

        return () => {
            songPlayerService.removeEvent()
        }
    }, [])

    const togglePlayerState =  (newState?: boolean) => {
        setPlayerVisible((prev) => newState ?? !prev)
    }

    return { togglePlayerState, playerVisible }
}