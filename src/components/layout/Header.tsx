import "./Header.css";
import { useState } from "react";




function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <div className="logo">
                    <span>GreenWeb</span>
                </div>
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
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>


        </header>
    );
}

export default Header;