export interface LicenseInclude {
    name: string
    type: 'radio' | 'video' | 'listening' | 'steams'
}

export type LicenseIncludeArray = LicenseInclude[]

export interface License {
    name: string
    includes: LicenseIncludeArray
}

export type LicenseArray = License[]

export const licensesData: LicenseArray = [
    {
        name: 'Basic',
        includes: [
            {
                name: '4000 Radio listenings',
                type: 'radio'
            },
            {
                name: 'Up to 4000 Listenings',
                type: 'listening'
            }
        ]
    },
    {
        name: 'Pro ',
        includes: [
            {
                name: '80000 Radio listenings',
                type: 'radio'
            },
            {
                name: 'Up to 80000 Listenings',
                type: 'listening'
            }
        ]
    },
    {
        name: 'Pro + Steams',
        includes: [
            {
                name: '90000 Radio listenings',
                type: 'radio'
            },
            {
                name: 'Up to 90000 Listenings',
                type: 'listening'
            },
            {
                name: 'Steams',
                type: 'steams'
            }
        ]
    },
    {
        name: 'Unlimited',
        includes: [
            {
                name: 'Unlimited Radio listenings',
                type: 'radio'
            },
            {
                name: 'Unlimited Listenings',
                type: 'listening'
            },
            {
                name: 'Unlimited videos',
                type: 'video'
            },
            {
                name: 'Steams',
                type: 'steams'
            }
        ]
    }
]