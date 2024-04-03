import { RouteObject } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { APP_ROUTES, RoutesPath } from 'shared/router';

export const routerConfig: RouteObject[] = [
    {
        path: RoutesPath[APP_ROUTES.MAIN],
        element: <MainPage />,
    },
    {
        path: RoutesPath[APP_ROUTES.ABOUT],
        element: <AboutPage />,
    },
];
