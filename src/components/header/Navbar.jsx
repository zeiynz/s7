
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
          <a href="#" className="logo">Sumberpitu</a>
        
        <nav className="navbar">
          
            <a href="#beranda">Beranda</a>
            <a href="#tentang-kami">Tentang Kami</a>
            <a href="#pelayanan">Pelayanan</a>
            <a href="#tempat">Tempat</a>
            <a href="#kontak">Kontak</a>
          
        </nav>
        
        <button className="menu-toggle" aria-label="Toggle Menu">
          ☰
        </button>
    </header>
  );
}

export default Navbar;