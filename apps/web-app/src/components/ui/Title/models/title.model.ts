export const titleElement = {
    secondary: 'h2',
    tertiary: 'h3',
    quaternary: 'h4'
} as const

export type TitleElement = keyof typeof titleElement