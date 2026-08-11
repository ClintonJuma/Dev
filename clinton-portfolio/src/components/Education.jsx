
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Education.css";

import {
  FaGraduationCap,
  FaCertificate,
  FaExternalLinkAlt
} from "../icons/icons";


function Education() {

  const [educationData, setEducationData] = useState([]);
  const [certifications, setCertifications] = useState([]);


  useEffect(() => {

    // Fetch education / degrees
    axios
      .get("https://clinton-portfolio-backend.onrender.com/api/projects/education/")
      .then((response) => {

        console.log("Education:", response.data);

        setEducationData(response.data);

      })
      .catch((error) => {

        console.error("Error fetching education:", error);

      });


    // Fetch certifications
    axios
      .get("https://clinton-portfolio-backend.onrender.com/api/projects/certifications/")
      .then((response) => {

        console.log("Certifications:", response.data);

        setCertifications(response.data);

      })
      .catch((error) => {

        console.error("Error fetching certifications:", error);

      });

  }, []);


  return (

    <section id="education">


      <p className="section-subtitle text-center">
        EDUCATION
      </p>


      <h2 className="section-title text-center mb-5">
        Academic Background & Certifications
      </h2>



      {/* Degrees */}

      {educationData.map((education, index) => (

        <div
          className="education-card mb-5"
          data-aos="fade-right"
          key={education.id}
        >

          <h3 className="education-heading">

            <FaGraduationCap className="education-icon" />

            {education.title}

          </h3>


          <h5>
            {education.institution}
          </h5>


          <p>
            <strong>
              {education.level}
            </strong>
          </p>


          <p>
            {education.description}
          </p>


          {/* View Degree */}

          {education.document && (

            <div className="mt-3">

              <a
                href={education.document}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary hero-btn"
              >

                <FaExternalLinkAlt className="button-icon" />

                View Degree

              </a>

            </div>

          )}

        </div>

      ))}



      {/* Certifications */}

      <h3 className="education-heading mb-4">

        <FaCertificate className="education-icon" />

        Professional Certifications

      </h3>


      <div className="row g-4">


        {certifications.map((cert, index) => (

          <div
            className="col-md-6 col-lg-4"
            key={cert.id}
            data-aos="fade-left"
            data-aos-delay={index * 100}
          >

            <div className="cert-card">


              <h5>
                {cert.title}
              </h5>


              <p>
                {cert.issuer}
              </p>


              {/* View Certificate */}

              {cert.certificate && (

                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light hero-btn mt-2"
                >

                  <FaExternalLinkAlt className="button-icon" />

                  View Certificate

                </a>

              )}


            </div>

          </div>

        ))}


      </div>


    </section>

  );

}


export default Education;

