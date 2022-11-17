import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'
import './header.css'

/**
 * Header
 * @component
 * @returns component jsx
 */
function Header(){
    return(
        <header className="component header">
        <img src={logo} alt="SportSee logo" />
        <nav>
          <ul>
            <li><Link to={'#'} className='header_Link'>Accueil</Link></li>
            <li><Link to={'#'} className='header_Link'>Profil</Link></li>
            <li><Link to={'#'} className='header_Link'>Réglage</Link></li>
            <li><Link to={'#'} className='header_Link'>Communauté</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header