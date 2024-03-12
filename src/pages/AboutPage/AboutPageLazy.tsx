import { lazy } from "react";

export const AboutPageLazy = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        // @ts-ignore
        // only for education example
        resolve(import(/* webpackChunkName: "AboutPage"*/'./AboutPage'));
    }, 1500);
}));