import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a href="#" className="logo-header">SumberPitu</a>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-menu">
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#tentang-kami">Tentang Kami</a></li>
          <li><a href="#pelayanan">Pelayanan</a></li>
          <li><a href="#tempat">Tempat</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </nav>

      <button 
        className="menu-toggle" 
        aria-label="Toggle Menu" 
        onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Navbar;