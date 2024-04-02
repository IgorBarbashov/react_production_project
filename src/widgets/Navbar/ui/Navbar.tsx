import {FC} from "react";
import {ThemeSwitcher} from "features/ThemeSwitcher";
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
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={RoutesPath.main} variant='inverted' className={cls.mainLink}>MainPage</AppLink>
                <AppLink to={RoutesPath.about} variant='inverted'>AboutPage</AppLink>
            </div>
        </div>
    );
};