'use client'
import { PlayerVisibleStatus } from "@/components/feat/SongPlayer/hooks/useSongPlayer"
import { CustomMessageEventApp } from "@/utils/custom-message.util"

export const songPlayerService = new CustomMessageEventApp<PlayerVisibleStatus>('song-player')