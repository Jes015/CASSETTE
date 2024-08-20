import { UUID } from "crypto"

export interface FrontRoute {
    name: string
    path: string
}

export type FrontRouteArray = FrontRoute[]

const backOrigin = process.env.BACK_URL
const prefix = '/api/'

const getBackUrl = (route: string) => {
    return backOrigin + prefix + route
}

export const backRoutes = {
    static: {
        user: {
            name: 'user',
            path: getBackUrl('user')
        },
        auth: {
            name: 'auth',
            subRoutes: {
                sessionCheckPoint: {
                    name: 'Session check point',
                    path: getBackUrl('auth/session-check-point')
                },
                signIn: {
                    name: 'Sign in',
                    path: getBackUrl('auth/sign-in')
                },
                signUp: {
                    name: 'Sign up',
                    path: getBackUrl('auth/sign-up')
                }
            }
        },
        art: {
            name: 'art',
            path: getBackUrl('art'),
            subRoutes: {
                user: {
                    name: 'User arts',
                    path: getBackUrl('art/user'),
                    subRoutes: {
                        featured: {
                            name: 'featured',
                            path: getBackUrl('art/user/featured')
                        }
                    }
                }
            }
        }
    },
    dynamic: {
        user(userName: string) {
            return getBackUrl('user') + '/' + userName
        }
        ,
        art: {
            subRoutes: {
                user: {
                    base (userId: UUID) {
                        return getBackUrl('art/user') + '/' + userId
                    },
                    subRoutes: {
                        featured(userOrArtId: UUID) {
                            return getBackUrl('art/user/featured') + '/' + userOrArtId
                        }
                    }
                }
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
                },
                signOut: {
                    name: 'Sign out',
                    path: '/auth/sign-out'
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