import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib";
import cls from './AppLink.module.scss';

interface IAppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<IAppLinkProps> = (props): JSX.Element => {
    const {to, children, className, ...restProps} = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className])}
            {...restProps}
        >
            {children}
        </Link>
    );
};