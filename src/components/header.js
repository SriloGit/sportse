import logo from "../assets/logo.png";

function Header(){
    return(
        <header className="component header">
        <img src={logo} alt="SportSee logo" />
        <nav>
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header