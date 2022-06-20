import logo from "../assets/logoorange.svg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <div className="header__logo">
            <img src={logo} className="logo" alt="Kasa" />
        </div>
        <nav className="header__nav">
            <ul>
                <li className="active"><Link to="/">Acceuil</Link></li>
                <li><Link to="/a-propos">A propos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header