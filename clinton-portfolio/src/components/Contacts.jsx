
import { useState } from "react";
import axios from "axios";
import "../styles/Contacts.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "../icons/Icons";

function Contacts() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {

      await axios.post(
        "http://127.0.0.1:8000/api/projects/contact/",
        formData
      );

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      console.error(error);

      setStatus(
        "Failed to send message. Please try again."
      );
    }
  };

  return (

    <section id="contact">

      <p className="section-subtitle text-center">
        CONTACT
      </p>

      <h2 className="section-title text-center mb-5">
        Let's Work Together
      </h2>

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="contact-card">

            <p className="contact-text">
              I'm always open to discussing new opportunities,
              freelance work, collaborations, or simply connecting
              with fellow professionals.
            </p>


            {/* Contact Information */}

            <div className="contact-info">

              <div className="contact-item">

                <h5>
                  <FaEnvelope className="contact-icon" />
                  Email
                </h5>

                <p>
                  clintonjuma4400@gmail.com
                </p>

              </div>


              <div className="contact-item">

                <h5>
                  <FaPhone className="contact-icon" />
                  Phone
                </h5>

                <p>
                  +254 794063568
                </p>

              </div>


              <div className="contact-item">

                <h5>
                  <FaMapMarkerAlt className="contact-icon" />
                  Location
                </h5>

                <p>
                  Nairobi, Kenya
                </p>

              </div>

            </div>


            {/* Contact Form */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="mb-3">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />

              </div>


              <div className="mb-3">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />

              </div>


              <div className="mb-3">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                />

              </div>


              <button
                type="submit"
                className="btn btn-primary contact-submit"
              >
                <FaEnvelope className="button-icon" />
                Send Message
              </button>


              {/* Status message */}

              {status && (
                <p className="contact-status">
                  {status}
                </p>
              )}

            </form>


            {/* Existing Contact Buttons */}

            <div className="contact-buttons">

              <a
                href="https://linkedin.com/"
                className="btn btn-primary hero-btn"
              >
                <FaLinkedin className="button-icon" />
                LinkedIn
              </a>


              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light hero-btn"
              >
                <FaGithub className="button-icon" />
                Github
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Contacts;

