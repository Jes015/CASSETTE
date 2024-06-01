export const artType = {
  beat: 'Beat',
  melodies: 'Melodies',
  covers: 'Covers',
  projectFiles: 'Project files',
} as const;

export type ArtTypeType = (typeof artType)[keyof typeof artType];
