declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpe';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.woff2';
declare module '*.woff';

declare module '*.svg' {
    import { FC, SVGProps } from 'react';

    const content: FC<SVGProps<SVGElement>>;
    export default content;
}

declare const __IS_DEV__: boolean;
