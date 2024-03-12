import { lazy } from "react";

export const MainPageLazy = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        // @ts-ignore
        // only for education example
        resolve(import(/* webpackChunkName: "MainPage"*/'./MainPage'));
    }, 1500);
}));