import { useTranslation } from 'react-i18next';
import { TRANSLATION_NAMESPACES } from 'shared/i18n/i18nConfig';

export const MainPage = () => {
    const { t } = useTranslation(TRANSLATION_NAMESPACES.MAIN);

    return (
        <div>
            {t('Main page')}
        </div>
    );
};
