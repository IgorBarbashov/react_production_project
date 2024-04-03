import { FC, Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IAppRouterProps {
    routerConfig: RouteObject[];
}

export const AppRouter: FC<IAppRouterProps> = ({ routerConfig }): JSX.Element => {
    const routes = useRoutes(routerConfig);
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{`${t('Loading')}...`}</div>}>
            <div className="page-wrapper">
                {routes}
            </div>
        </Suspense>
    );
};
