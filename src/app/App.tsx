import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {AppRouter} from "shared/router";
import {useTheme} from "shared/theme";
import {classNames} from "shared/lib";
import {routerConfig} from './configs';
import './styles/index.scss';

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter routerConfig={routerConfig}/>
            </div>
        </div>
    );
};