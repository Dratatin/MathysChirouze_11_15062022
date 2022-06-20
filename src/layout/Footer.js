import logo from "../assets/logoblanc.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logoContainer">
        <img src={logo} alt="Kasa"/>
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer