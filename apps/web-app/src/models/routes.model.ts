export interface FrontRoute {
    name: string
    path: string
}

export type FrontRouteArray = FrontRoute[]

export const frontRoutes = {
    home: {
        name: 'Home',
        path: '/home',
    },
    explore: {
        name: 'Explore',
        path: '/explore'
    },
    talents: {
        name: 'Discover hidden talents',
        path: '/talents'
    }
}