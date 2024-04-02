import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
        </div>
    );
};