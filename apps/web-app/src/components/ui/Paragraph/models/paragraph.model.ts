export const paragraphElement = {
    secondary: 'secondary',
    tertiary: 'tertiary',
    quaternary: 'quaternary'
} as const

export type ParagraphElement = keyof typeof paragraphElement