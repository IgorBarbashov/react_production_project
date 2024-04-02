import {Suspense} from "react";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {AppRouter} from "shared/router";
import {useTheme} from "shared/theme";
import {classNames} from "shared/lib";
import {routerConfig} from './configs';
import './styles/index.scss';
import {useTranslation} from "react-i18next";

function MyComponent() {
    const {t, i18n} = useTranslation();

    return (
        <>
            <button
                onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
            >
                {t('Translate')}
            </button>
            <h1>{t('Welcome to React')}</h1>
        </>
    );
}

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback={<div>Loading translations...</div>}>
                <Navbar/>
                <MyComponent/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter routerConfig={routerConfig}/>
                </div>
            </Suspense>
        </div>
    );
};