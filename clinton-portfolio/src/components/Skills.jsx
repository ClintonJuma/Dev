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
            <h3><FaLaptopCode className="skill-icon" />IT Support</h3>

            <div className="skills-container">
              {[
                "Technical Troubleshooting",
                "Software configuration",
                "Hardware maintenance",
                "Operating Systems",
                "Network Maintenance",
                "Microsoft Office"
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
              <FaServer className="skill-icon" /> Data Analysis
            </h3>

            <div className="skills-container">
              {[
                "Python for DA",
                "Exploratory Data Analysis",
                "SQL",
                "Excel &Google Sheets",
                "Tableau",
                "Data Cleaning",
                "Data Visualization",
                "Statistical Analysis",
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
              <FaTools className="skill-icon" /> Machine Learning &AI
            </h3>

            <div className="skills-container">
              {[
                "ML Fundamentals",
                "Feature Engineering",
                "Predictive Modelling",
                "Model Evaluation",
                "Deep Learning Fundamentals",
                "Training Small Language Models",
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
            <h3><FaDatabase className="skill-icon" /> Web Development</h3>

            <div className="skills-container">
              {[
                "HTML, CSS,JavaScript",
                "Bootstrap",
                "React",
                "Django",
                "Rest API",
                "Git, Github",
                "Deploment",
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