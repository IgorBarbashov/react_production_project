import { lazy } from "react";

export const MainPageLazy = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        // @ts-ignore
        // only for education example
        resolve(import('./MainPage'));
    }, 1500);
}));