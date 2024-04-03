import { RouteObject } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { APP_ROUTES, RoutesPath } from 'shared/router';

const routerObject: Record<APP_ROUTES, RouteObject> = {
    [APP_ROUTES.MAIN]: {
        path: RoutesPath[APP_ROUTES.MAIN],
        element: <MainPage />,
    },
    [APP_ROUTES.ABOUT]: {
        path: RoutesPath[APP_ROUTES.ABOUT],
        element: <AboutPage />,
    },
    [APP_ROUTES.NOT_FOUND]: {
        path: RoutesPath[APP_ROUTES.NOT_FOUND],
        element: <NotFoundPage />,
    },
};

export const routerConfig: RouteObject[] = Object.values(routerObject);
