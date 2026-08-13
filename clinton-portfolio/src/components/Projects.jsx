import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Projects.css";

import {
  FaGithub,
  FaExternalLinkAlt
} from "../icons/icons";


function Projects() {

  const [projectsData, setProjectsData] = useState([]);


  useEffect(() => {

    axios
      .get("https://clinton-portfolio-backend.onrender.com/api/projects/")
      .then((response) => {

        console.log(JSON.stringify(response.data, null, 2));

        setProjectsData(response.data);

      })
      .catch((error) => {

        console.error("Error fetching projects:", error);

      });

  }, []);



  return (

    <section id="projects">


      <p className="section-subtitle text-center">
        PROJECTS
      </p>


      <h2 className="section-title text-center mb-5">
        Featured Work
      </h2>



      <div className="row g-4">


        {projectsData.map((project, index) => (


          <div
            className="col-md-6 col-lg-4 mb-4"
            key={project.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >

            <div className="project-card">


              <img

                src={
                  project.image
                    ? project.image
                    : "/default-project.png"
                }

                alt={project.title}

                className="project-image"

              />



              <div className="project-content">



                <h4>
                  {project.title}
                </h4>



                <p className="project-category">

                  {project.category}

                </p>




                <p className="project-description">

                  {project.description}

                </p>




                <div className="project-tech">


                  {project.technologies
                    .split(",")
                    .map((tech) => (


                      <span

                        key={tech}

                        className="project-chip"

                      >

                        {tech.trim()}

                      </span>


                    ))}


                </div>





                <div className="project-buttons mt-auto">



                  {
                    project.github && (

                      <a

                        href={project.github}

                        target="_blank"

                        rel="noreferrer"

                        className="btn btn-primary hero-btn"

                      >

                        <FaGithub className="button-icon"/>

                        Github


                      </a>

                    )
                  }





                  {
                    project.demo && (

                      <a

                        href={project.demo}

                        target="_blank"

                        rel="noreferrer"

                        className="btn btn-outline-light hero-btn"

                      >

                        <FaExternalLinkAlt className="button-icon"/>

                        Live Demo


                      </a>

                    )
                  }




                </div>



              </div>



            </div>



          </div>



        ))}



      </div>



    </section>

  );

}


export default Projects;