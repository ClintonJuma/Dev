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
            I am an ICT professional with a strong interest in software engineering,
            web development, data analysis, and building practical digital solutions
            that solve real-world problems.

          </p>

          <p>
            My goal is to combine technology, data, and modern software development
            to create reliable, user-friendly applications while continuously
            improving my technical and problem-solving skills.
          
          </p>

        </div>

        <div className="col-lg-6">

          <h3 className="facts-title">Quick Facts</h3>

          <ul className="list-group">

            <li className="list-group-item">
              🎓 Bachelor of Information Technology
            </li>

            <li className="list-group-item">
              💼 ICT & Administrative Officer
            </li>

            <li className="list-group-item">
              💻 Learning Software Engineering
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