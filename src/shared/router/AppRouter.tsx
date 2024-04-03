import { FC, Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

interface IAppRouterProps {
    routerConfig: RouteObject[];
}

export const AppRouter: FC<IAppRouterProps> = ({ routerConfig }): JSX.Element => {
    const routes = useRoutes(routerConfig);
    const { t } = useTranslation();

    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                {routes}
            </div>
        </Suspense>
    );
};
