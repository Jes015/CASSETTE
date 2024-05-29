export const userRoles = {
  Singer: 'Singer',
  Producer: 'Producer',
  Painter: 'Painter',
  BeatMaker: 'Beat maker',
  MixingEngineer: 'Mixing engineer',
  ElLindo: 'El lindo',
  LaEstrellaMasGrandeDelMundoEntero: 'La estrella mas grande del mundo entero',
  LaMaravilla: 'La maravilla',
  MasteringEngineer: 'Mastering engineer',
} as const;

export type UserRolesType = (typeof userRoles)[keyof typeof userRoles];

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
} as const;

export type UserSystemRolesType =
  (typeof userSystemRoles)[keyof typeof userSystemRoles];

export type UserSystemRolesArrayType = UserSystemRolesType[];

export const userStatus = {
  Banned: 'Banned',
  Active: 'Active',
  Suspend: 'Suspend',
  Timeout: 'Timeout',
} as const;

export type UserStatusType = (typeof userStatus)[keyof typeof userStatus];
