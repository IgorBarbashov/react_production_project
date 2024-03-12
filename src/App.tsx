import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
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