export const licensesNames = {
    basic: 'Basic',
    pro: 'Pro',
    steams: 'Steams',
    exclusive: 'Exclusive'
} as const

export type LicenseType = typeof licensesNames[keyof typeof licensesNames]