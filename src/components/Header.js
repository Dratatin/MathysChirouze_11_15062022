import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="header">
        <div className="header__logo">
            <img src={logo} className="logo" alt="Kasa" />
        </div>
        <nav className="header__nav">
            <ul>
                <li className="active"><a href="#">Accueil</a></li>
                <li><a href="#">A Propos</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header