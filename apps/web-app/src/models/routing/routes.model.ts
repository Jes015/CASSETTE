export interface FrontRoute {
    name: string
    path: string
}

export type FrontRouteArray = FrontRoute[]

const backOrigin = process.env.BACK_URL

export const backRoutes = {
    static: {
        auth: {
            name: 'auth',
            signIn: {
                name: 'Sign in',
                path: `${backOrigin}/api/auth/sign-in`
            },
            signUp: {
                name: 'Sign up',
                path: `${backOrigin}/api/auth/sign-up`
            }
        }
    }
}

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
        upload: {
            name: 'Upload',
            path: '/upload',
            subRoutes: {
                beat: {
                    name: 'Beat',
                    path: '/upload/beat'
                },
                cover: {
                    name: 'Cover',
                    path: '/upload/cover'
                },
                melodies: {
                    name: 'Melody',
                    path: '/upload/melodies'
                },
                projectFiles: {
                    name: 'Project files',
                    path: '/upload/project-files'
                }

            }
        },
        auth: {
            name: 'Auth',
            path: '/auth',
            subRoutes: {
                signIn: {
                    name: 'Sign in',
                    path: '/auth/sign-in'
                },
                signUp: {
                    name: 'Sign up',
                    path: '/auth/sign-up'
                },
                accessCode: {
                    name: 'Sign in by email code',
                    path: '/auth/access-code'
                },
                resetPassword: {
                    name: 'Reset password',
                    path: '/auth/reset-password'
                },
                reportAuth: {
                    name: 'Report auth bug',
                    path: '/auth/report'
                }
            }
        }
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