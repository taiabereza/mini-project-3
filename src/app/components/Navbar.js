import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="navbar">
            <li className="navbar-link navbar-link-currency">
                <NavLink to='/mini-project-3/currency'>КОНВЕРТЕР ВАЛЮТ</NavLink>
            </li>
            <li className="navbar-link navbar-link-quiz">
                <NavLink to='/mini-project-3/quiz'>КВІЗ</NavLink>

            </li>
            <li className="navbar-link navbar-link-photogramm">
                <NavLink to='/mini-project-3/photogramm'>PHOTOGRAMM</NavLink>
            </li>
        </ul>
    )
}