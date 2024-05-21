export const themeNames = {
    dark: 'Dark',
    white: 'White',
    system: 'System'
} as const

export const themeData = [
    {
        name: themeNames.system,
        color: 'system'
    },
    {
        name: themeNames.white,
        color: 'white',
    },
    {
        name: themeNames.dark,
        color: 'black',
    }
]

export type ThemeType = typeof themeNames[keyof typeof themeNames]

