import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui';
import { classNames } from 'shared/lib';
import { RoutesPath } from 'shared/router';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={RoutesPath.main}
                    variant="inverted"
                    className={cls.mainLink}
                >
                    {t('Main page')}
                </AppLink>
                <AppLink
                    to={RoutesPath.about}
                    variant="inverted"
                >
                    {t('About page')}
                </AppLink>
            </div>
        </div>
    );
};
