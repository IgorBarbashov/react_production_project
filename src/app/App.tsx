import {Navbar} from "widgets/Navbar";
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
            <AppRouter routerConfig={routerConfig}/>
        </div>
    );
};