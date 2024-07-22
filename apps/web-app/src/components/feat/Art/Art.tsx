'use client'
import { ArtEntity } from "@/models/logic/art.model"
import { BaseComponentProps } from "@/models/ui/component.model"
import { FC } from "react"
import { ArtForColumns } from "./components/ArtForColumns"
import { ArtForRows } from "./components/ArtForRows"

export interface ArtProps extends BaseComponentProps{
    type: 'column' | 'row'
    data: ArtEntity
    isProfileOwner?: boolean
    displayButtons?: boolean
    as?: 'article' | 'Link'
}

export type ArtForColumnsAndRowsType = FC<Omit<ArtProps, 'type'>>

export const Art: FC<ArtProps> = ({ type, ...props }) => {

    if (type === 'column') return <ArtForColumns {...props} />
    if (type === 'row') return <ArtForRows {...props} />
}