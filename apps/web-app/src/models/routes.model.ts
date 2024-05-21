export interface FrontRoute {
    name: string
    path: string
}

export type FrontRouteArray = FrontRoute[]

export const frontRoutes = {
    static: {
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
        },
        artist: {
            name: 'Artist',
            path: '/:artist',
            paramName: 'artist'
        },
        art: {
            name: 'Art',
            path: '/:artist/:art',
            paramName: 'art',
        },
        whatilove: {
            name: 'What i love',
            path: '/whatilove',
        },
        settings: {
            name: 'Settings',
            path: '/settings',
            subRoutes: {
                home: {
                    name: 'Home',
                    path: '/settings'
                },
                artist: {
                    name: 'Artist',
                    path: '/settings/artist'
                },
                payments: {
                    name: 'Payments',
                    path: '/settings/payments'
                }
            }
        },
    },
    dynamics: {
        artist: ({ artistName }: FrontArtistDynamicRouteParams) => {
            return '/' + artistName
        },
        art: function ({ artistName, artName }: FrontArtDynamicRouteParams) {
            return this.artist({ artistName }) + '/' + artName
        },
    }
}

interface FrontArtistDynamicRouteParams {
    artistName: string
}

interface FrontArtDynamicRouteParams extends FrontArtistDynamicRouteParams {
    artName: string
}