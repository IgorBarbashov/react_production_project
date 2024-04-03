import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((resolve) => {
    // only for education example
    setTimeout(() => {
        // @ts-ignore
        resolve(import(/* webpackChunkName: "MainPage" */'./MainPage').then((module) => ({ default: module.MainPage })));
    }, 1500);
}));
