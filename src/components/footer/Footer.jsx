import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description Section */}
        <section className="footer-section" aria-labelledby="footer-logo-description">
          {/* <img src="/path-to-logo.png" alt="Logo SumberPitu" className="footer-logo" /> */}
          <h3>sumberpitu</h3>
          <p id="footer-logo-description">
          Desa Sumberpitu terletak di Kecamatan Tutur, Kabupaten Pasuruan, Provinsi Jawa Timur. Desa ini dikenal sebagai salah satu daerah yang memiliki potensi alam yang luar biasa, dikelilingi oleh pemandangan pegunungan dan udara yang sejuk. Lokasinya yang berada di dataran tinggi menjadikan Sumberpitu sebagai destinasi yang cocok untuk menikmati suasana pedesaan yang tenang dan asri.
          </p>
        </section>

        {/* Social Media Section */}
        {/* <section className="footer-section" aria-labelledby="footer-social-title">
          <h3 id="footer-social-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </section> */}

        {/* Newsletter Subscribe Section */}
        <section className="footer-section" aria-labelledby="footer-newsletter-title">
          <h3 id="footer-newsletter-title">Newsletter</h3>
          <p>Subscribe to stay updated with our latest news and offers.</p>
          <form className="newsletter-form" aria-label="Subscribe to newsletter">
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email" 
              aria-label="Email address"
              required 
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 SumberPitu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;