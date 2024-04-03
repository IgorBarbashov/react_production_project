import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'shared/router';
import { useTheme } from 'shared/theme';
import { classNames } from 'shared/lib';
import { routerConfig } from './configs';
import './styles/index.scss';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback={<div>Loading translations...</div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter routerConfig={routerConfig} />
                </div>
            </Suspense>
        </div>
    );
}
