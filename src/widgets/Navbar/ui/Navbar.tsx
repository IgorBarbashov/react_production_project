import {FC} from "react";
import {Link} from "react-router-dom";
import {classNames} from "shared/lib";
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
        </div>
    );
};