import { Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import './index.scss';

export const App = () => {
    return (
        <div className='app'>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/about' element={<AboutPage />}/>
            </Routes>
        </div>
    );
};