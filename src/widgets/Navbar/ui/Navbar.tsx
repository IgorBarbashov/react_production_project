import {FC} from "react";
import {AppLink} from "shared/ui";
import {classNames} from "shared/lib";
import {RoutesPath} from "shared/router";
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={RoutesPath.main} className={cls.mainLink}>MainPage</AppLink>
                <AppLink to={RoutesPath.about}>AboutPage</AppLink>
            </div>
        </div>
    );
};