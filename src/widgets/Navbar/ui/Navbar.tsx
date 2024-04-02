import {FC} from "react";
import {Link} from "react-router-dom";
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
                <Link to={RoutesPath.main} className={cls.mainLink}>MainPage</Link>
                <Link to={RoutesPath.about}>AboutPage</Link>
            </div>
        </div>
    );
};