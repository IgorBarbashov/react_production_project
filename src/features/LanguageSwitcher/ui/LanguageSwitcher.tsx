import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';

interface ILanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: FC<ILanguageSwitcherProps> = (props): JSX.Element => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const onToggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button
            onClick={onToggleLanguage}
            className={classNames('', {}, [className])}
            variant="clear"
        >
            {t('Language')}
        </Button>
    );
};
