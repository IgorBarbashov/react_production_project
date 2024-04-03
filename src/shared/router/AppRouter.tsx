import { FC, Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

interface IAppRouterProps {
    routerConfig: RouteObject[];
}

export const AppRouter: FC<IAppRouterProps> = ({ routerConfig }): JSX.Element => {
    const routes = useRoutes(routerConfig);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="page-wrapper">
                {routes}
            </div>
        </Suspense>
    );
};
