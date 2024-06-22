import { UUID } from 'crypto'
import { User, UserArray } from './user.model'

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
  } as const;
  
  export type ArtTypeType = (typeof artType)[keyof typeof artType];
  