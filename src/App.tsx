import { Suspense, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import './styles/index.scss';

export enum THEME {
    LIGHT = 'light',
    DARK = 'dark',
}

export const App = () => {
    const [theme, setTheme] = useState<THEME>(THEME.LIGHT);

    const toggleTheme = () => setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};