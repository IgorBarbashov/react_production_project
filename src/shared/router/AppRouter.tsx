import React, {FC, Suspense} from "react";
import {useRoutes, RouteObject, Routes, Route} from "react-router-dom";

interface IAppRouterProps {
    routerConfig: RouteObject[];
}

export const AppRouter: FC<IAppRouterProps> = ({routerConfig}): JSX.Element => {
    const routes = useRoutes(routerConfig);

    return (
        <Suspense fallback={'Loading...'}>
            {routes}
        </Suspense>
    );
};