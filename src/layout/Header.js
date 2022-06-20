import logo from "../assets/logoorange.svg"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <div className="header__logo">
            <img src={logo} className="logo" alt="Kasa" />
        </div>
        <nav className="header__nav">
            <ul>
                <li>
                  <NavLink activeClassName={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Acceuil</NavLink>
                </li>
                <li>
                  <NavLink activeClassName={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/a-propos">A propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header