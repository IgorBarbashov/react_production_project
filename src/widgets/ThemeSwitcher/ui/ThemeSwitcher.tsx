import {FC} from "react";
import {useTheme} from "shared/theme";
import {classNames} from "shared/lib";
import cls from './ThemeSwitcher.module.scss';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props): JSX.Element => {
    const {className} = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            Toggle
        </button>
    );
};