
import "./Beranda.css"

const Beranda = () => {
  return (

    <section id="beranda" className="beranda-section">
      <img src="public/bg2.jpg" alt="" />

      <div className="container">
        <div className="content">
          <h2>Selamat Datang Di Desa Sumberpitu</h2>
          <p>a beautiful small village at the foot of mount bromo</p>
          <a href="#tentang-kami" className="btn-get-started">
            Get Started
          </a>
        </div>
      </div>
    </section>

  )
}

export default Beranda