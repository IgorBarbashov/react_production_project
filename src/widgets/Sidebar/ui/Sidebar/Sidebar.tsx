import { useState, FC } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export const Sidebar: FC<ISidebarProps> = (props): JSX.Element => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onToggleCollapsed = () => setCollapsed((prev) => !prev);

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button onClick={onToggleCollapsed}>
                Toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.languageSwitcher} />
            </div>
        </div>
    );
};
