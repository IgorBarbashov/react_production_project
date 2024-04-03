import { lazy } from 'react';

export const AboutPageLazy = lazy(() => new Promise((resolve) => {
    // only for education example
    setTimeout(() => {
        // @ts-ignore
        resolve(import(/* webpackChunkName: "AboutPage" */'./AboutPage').then((module) => ({ default: module.AboutPage })));
    }, 1500);
}));
