import { UUID } from 'crypto'
import { User, UserArray } from './user.model'

export interface FeaturedArt {
    id: UUID | null
    featuredArt: ArtEntity
    order: number
}

export interface ApiAddFeaturedArt {
    id: UUID
    order: number
    user: {
        id: "202d4e0b-f60f-435c-8180-741e83467459"
    }
    featuredArt: ArtEntity
}

export type FeaturedArtArray = FeaturedArt[]

export interface ArtEntity {
    id: UUID
    title: string
    description: string
    videoLink: string
    imageLink: string
    audioLink: string
    type: ArtTypeType
    created_at: number
    owner: User
    collaborators: UserArray
}

export type ArtEntityPartial = Partial<ArtEntity>

export type ArtEntityArray = ArtEntity[]

export const artType = {
    beat: 'Beat',
    melodies: 'Melodies',
    covers: 'Covers',
    projectFiles: 'Project files',
} as const

export type ArtTypeType = (typeof artType)[keyof typeof artType];
