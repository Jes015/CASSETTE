import { z as zValidator } from "zod"

export const colors = {
    blue: {
        name: 'blue',
        bg: '#dbeafe',
        text: '#3b82f6'
    },
    yellow: {
        name: 'yellow',
        bg: '#fef9c3',
        text: '#eab308'
    },
    orange: {
        name: 'orange',
        bg: '#ffedd5',
        text: '#f97316'
    },
    pink: {
        name: 'pink',
        bg: '#fce7f3',
        text: '#ec4899'
    },
    green: {
        name: 'green',
        bg: '#dcfce7',
        text: '#22c55e'
    },
    cyan: {
        name: 'cyan',
        bg: '#cffafe',
        text: '#06b6d4'
    },
    teal: {
        name: 'teal',
        bg: '#ccfbf1',
        text: '#14b8a6'
    },
    fuchsia: {
        name: 'fuchsia',
        bg: '#fae8ff',
        text: '#d946ef'
    },
    red: {
        name: 'red',
        bg: '#fee2e2',
        text: '#ef4444'
    }
} as const

export const colorsEnumsSchema = zValidator.enum(['blue', 'yellow', 'orange', 'pink', 'green', 'cyan', 'teal', 'fuchsia', 'red'])

export type Color = zValidator.infer<typeof colorsEnumsSchema>