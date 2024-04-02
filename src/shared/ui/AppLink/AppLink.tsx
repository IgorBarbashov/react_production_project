import {FC} from "react";
import {Link} from "react-router-dom";
import {classNames} from "shared/lib";
import cls from './AppLink.module.scss';

interface IAppLinkProps {
    to: string;
    className?: string;
}

export const AppLink: FC<IAppLinkProps> = (props): JSX.Element => {
    const {children, to, className} = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className])}
        >
            {children}
        </Link>
    );
};