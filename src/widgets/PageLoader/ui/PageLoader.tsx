import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = (props): JSX.Element => {
    const { className } = props;

    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
