import { lazy } from "react";

export const AboutPageLazy = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        // @ts-ignore
        // only for education example
        resolve(import('./AboutPage'));
    }, 1500);
}));