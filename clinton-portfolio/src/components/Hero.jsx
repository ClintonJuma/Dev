
import profile from "../assets/images/profile.jpg";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">

            <p>
              👋 Hello, I'm
            </p>

            <h1>
              Clinton Nyamora Juma
            </h1>

            <h2>
              ICT Support | Data Scientist | Full Stack Developer
            </h2>

            <p>
              I build modern web applications, provide ICT support,
              analyze data, and utilize machine learning to develop
              practical solutions by merging technologies.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn btn-primary hero-btn"
              >
                View Projects
              </a>

              <a
                href="/CV.pdf"
                download
                className="btn btn-primary hero-btn"
              >
                📄 Download CV
              </a>

            </div>

          </div>

          <div className="col-md-6 text-center">

            <img
              src={profile}
              alt="Clinton Juma"
              className="img-fluid rounded-circle shadow-lg border border-4 border-primary"
              width="380"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

