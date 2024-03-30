export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutesPath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about',
}