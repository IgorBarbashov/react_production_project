import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib";
import cls from './AppLink.module.scss';

type IAppLinkVariant = 'primary' | 'inverted' | 'red';

interface IAppLinkProps extends LinkProps {
    className?: string;
    variant?: IAppLinkVariant;
}

export const AppLink: FC<IAppLinkProps> = (props): JSX.Element => {
    const {
        to,
        children,
        className,
        variant = 'primary',
        ...restProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[variant]])}
            {...restProps}
        >
            {children}
        </Link>
    );
};