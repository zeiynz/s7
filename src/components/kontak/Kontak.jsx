
import "./kontak.css";

const Kontak = () => {
  const map ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.2791644688896!2d112.80693913302512!3d-7.836479589962352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62d985df77427%3A0xae5763e2c904d28f!2sBalai%20Desa%20Sumberpitu!5e0!3m2!1sid!2sid!4v1734160414920!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
  return (
    <section className="kontak">
      <div className="container">
        {/* Kotak Peta */}
        <div className="map-box">
          <iframe src={map} title="Google Maps"></iframe>
        </div>

        {/* Kotak Informasi */}
        <div className="info-box">
          <h1>Kontak Kami</h1>
          <p>Kami terbuka untuk segala saran atau sekadar ingin berbicara</p>
          <div className="info-items">
            <div className="info-item">
              <h4>ALAMAT :</h4>
              <p>Jalan Raya Sumberpitu, Kec.Tutur, Kab.Pasuruan Jawa Timur</p>
            </div>
            <div className="info-item">
              <h4>EMAIL :</h4>
              <p>baldessumberpitu@gmail.com</p>
            </div>
            <div className="info-item">
              <h4>TELEPON :</h4>
              <p>+6285717143287</p>
            </div>
          </div>
          <form>
            <input type="text" placeholder="Nama" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subjek" />
            <textarea rows="5" placeholder="Tulis pesan Anda..."></textarea>
            <button type="submit" className="primary-btn">
              KIRIM PESAN
            </button>
          </form>
          <h3>Ikuti Kami</h3>
          <p>FACEBOOK | TWITTER | INSTAGRAM</p>
        </div>
      </div>
    </section>
  );
};

export default Kontak;