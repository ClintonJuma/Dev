import "../styles/About.css"
function About() {
  return (
    <section id="about" 
      className="container py-5"
      data-aos="fade-right">

      <div className="row">

        <div className="col-lg-6">

          <p className="section-subtitle">
            ABOUT ME
          </p>

          <h2 className="section-title">
            Passionate About Technology and
             Building Digital Solutions
          </h2>

          <p>
            I am an Information Technology professional, with hands on experince in IT supprot,
            and technology driven pronblem solving , with additional skills in data science 
            and web development.

          </p>

          <p>
            My goal is to leverage my technical and analytical skills 
            to solve real-world problems, contribute to impactful projects, 
            and continuously grow as a technology professional.
          
          </p>

        </div>

        <div className="col-lg-6">

          <h3 className="facts-title">Quick Facts</h3>

          <ul className="list-group">

            <li className="list-group-item">
              🎓 Bachelor of Information Science(Informatics Specialization)
            </li>

            <li className="list-group-item">
              💼 ICT & Administrative Officer
            </li>

            <li className="list-group-item">
              💻 Open to IT opportunities
            </li>

            <li className="list-group-item">
              📍 Kenya
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;