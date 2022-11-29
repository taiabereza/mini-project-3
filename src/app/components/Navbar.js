import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="navbar">
            <li className="navbar-link navbar-link-currency">
                <NavLink to='/currency'>КОНВЕРТЕР ВАЛЮТ</NavLink>
            </li>
            <li className="navbar-link navbar-link-quiz">
                <NavLink to='/quiz'>КВІЗ</NavLink>

            </li>
            <li className="navbar-link navbar-link-photogramm">
                <NavLink to='/photogramm'>PHOTOGRAMM</NavLink>
            </li>
        </ul>
    )
}