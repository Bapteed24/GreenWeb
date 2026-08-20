import "./Header.css";
import logo from "../../assets/greenweb-logo.svg";
import { useState } from "react";




function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <a href="/" className="logo" aria-label="GreenWeb - Accueil">
                    <img src={logo} alt="" />

                     <span className="logo-name">
                        Green<span>Web</span>
                     </span>
                </a>
                <button className="menu-button" 
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <ul className={`menu ${menuOpen ? "open" : ""}`}>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/agency">L'agence</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/portfolio">Réalisations</a></li>
                    <li>
                        <a href="/contact" className="nav-contact">
                            Parlons de votre projet
                        </a>
                    </li>
                </ul>       
            </nav>


        </header>
    );
}

export default Header;