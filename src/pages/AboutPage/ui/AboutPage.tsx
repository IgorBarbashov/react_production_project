import {useTranslation} from "react-i18next";
import {TRANSLATION_NAMESPACES} from "shared/i18n/i18nConfig";

export const AboutPage = () => {
    const {t} = useTranslation(TRANSLATION_NAMESPACES.ABOUT);

    return (
        <div>
            {t('About page')}
        </div>
    );
};