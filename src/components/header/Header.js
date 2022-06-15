import logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
  return (
    <header>
        <div>
            <img src={logo} className="logo" alt="Kasa" />
        </div>
        <nav>
            <ul>
                <li className="active"><a href="#">Accueil</a></li>
                <li><a href="#">A Propos</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header