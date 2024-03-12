import {Suspense, useContext} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {useTheme} from "./theme/useTheme";
import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

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