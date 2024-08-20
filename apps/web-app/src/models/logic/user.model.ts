import { UUID } from 'crypto'
import { z } from 'zod'

export interface SignInUserSession {
    user: User
    token: string
}

export interface User {
  id: UUID;
  username: string;
  avatar: string;
  socials: string[];
  email: string;
  description: string;
  status: UserStatusType;
  emailVerified: boolean;
  systemRoles: UserSystemRolesType;
  roles: string[];
}

export type UserPartial = Partial<User>

export type UserArray = User[];

export type UserKey = keyof User;

export const userRoles = {
    Singer: 'Singer',
    Producer: 'Producer',
    Writer: 'Writer',
    Painter: 'Painter',
    BeatMaker: 'Beat maker',
    MixingEngineer: 'Mixing engineer',
    ElLindo: 'El lindo',
    LaEstrellaMasGrandeDelMundoEntero: 'La estrella mas grande del mundo entero',
    LaMaravilla: 'La maravilla',
    MasteringEngineer: 'Mastering engineer',
} as const

export type UserRolesType = (typeof userRoles)[keyof typeof userRoles]
export type UserRolesArrayType = UserRolesType[]

export const userSystemRoles = {
    User: 'User',
    Pro: 'Pro',
    Premium: 'Premium',
    Star: 'Star',
    SuperStar: 'Super star',
    ElLindo: 'El lindo',
    Admin: 'Admin',
    Moderator: 'Moderator',
    ElDueño: 'El dueño',
} as const

export type UserSystemRolesType =
    (typeof userSystemRoles)[keyof typeof userSystemRoles]

export type UserSystemRolesArrayType = UserSystemRolesType[]

export const userStatus = {
    Banned: 'Banned',
    Active: 'Active',
    Suspend: 'Suspend',
    Timeout: 'Timeout',
} as const

export type UserStatusType = (typeof userStatus)[keyof typeof userStatus]

export const userValidationSchemaValues = {
    email: z.string().max(50).email().refine((value) => value.endsWith('gmail.com'), { message: 'Just gmail.com directions are allowed'}),
    username: z.string().min(4).max(40).regex(/^[a-zA-Z0-9_-]+$/, { message: 'The username should not contain symbols or operators.' }),
    description: z.string().min(4).max(400).optional(),
    password: z.string().min(4).max(40).regex(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'The password must have a Uppercase, lowercase letter and a number' }),
    roles: z.array(z.string()).refine(value => value.every(val => Object.values(userRoles).includes(val as UserRolesType)), { message: 'Valid values: ' + Object.values(userRoles).join(', ')}).optional(),
    socials: z.string().url().array().max(3).optional()
} as const