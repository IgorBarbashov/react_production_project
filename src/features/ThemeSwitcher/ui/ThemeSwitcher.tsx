import { FC } from 'react';
import { THEME, useTheme } from 'shared/theme';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props): JSX.Element => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            {theme === THEME.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
