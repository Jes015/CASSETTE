export const languageNames = {
    Español: 'ES',
    English: 'EN',
} as const

export type LanguageType = typeof languageNames[keyof typeof languageNames]

