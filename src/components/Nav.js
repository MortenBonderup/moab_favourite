// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/current">Current watching</NavLink>
            <NavLink to="/favourite">My Favourites</NavLink>
        </nav>
    );
}
