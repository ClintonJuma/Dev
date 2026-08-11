import "../styles/Skills.css";
import {
  FaLaptopCode,
  FaServer,
  FaTools,
  FaDatabase
} from "../icons/icons";
function Skills() {
  return (
    <section id="skills" className="container py-5" data-aos="zoom-in">

      <p className="section-subtitle text-center">
        MY SKILLS
      </p>

      <h2 className="section-title text-center mb-5">
        Technologies & Tools I Work With
      </h2>

      <div className="row g-4">

        {/* Frontend */}
        <div className="col-md-6 col-lg-3 mb-4"
          data-aos="fade-up" data-aos-delay="100">
          <div className="skill-card">
            <h3><FaLaptopCode className="skill-icon" /> Frontend</h3>

            <div className="skills-container">
              {[
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Bootstrap",
                "GitHub"
              ].map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="col-md-6 col-lg-3 mb-4"
        data-aos="fade-up" data-aos-delay="200">
          <div className="skill-card">
            <h3>
              <FaServer className="skill-icon" /> Backend
            </h3>

            <div className="skills-container">
              {[
                "Django",
                "REST APIs",
                "Databases"
              ].map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ICT & Tools */}
        <div className="col-md-6 col-lg-3 mb-4"
        data-aos="fade-up" data-aos-delay="200">
          <div className="skill-card">
            <h3>
              <FaTools className="skill-icon" /> ICT & Tools
            </h3>

            <div className="skills-container">
              {[
                "ICT Technical Support",
                "Operating Systems",
                "Git",
                "GitHub",
                "Microsoft 365",
                "Networking",
                "Hardware",
            
              ].map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Data & AI */}
        <div className="col-md-6 col-lg-3 mb-4"
        data-aos="fade-up" data-aos-delay="400">
          <div className="skill-card">
            <h3><FaDatabase className="skill-icon" /> Data & AI</h3>

            <div className="skills-container">
              {[
                "Python",
                "Pandas",
                "NumPy",
                "Machine Learning",
                "Tableau"
              ].map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;