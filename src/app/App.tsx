import {Link} from "react-router-dom";
import {AppRouter} from "shared/router";
import {useTheme} from "shared/theme";
import {classNames} from "shared/lib";
import {routerConfig} from './configs';
import './styles/index.scss';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>

            <AppRouter routerConfig={routerConfig}/>
        </div>
    );
};