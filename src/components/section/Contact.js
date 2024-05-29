import React from "react";
import { contact, section5Title, social } from "../../db";

const Contact = () => {
  return (
    <div className="contact">
      <div data-aos="zoom-in-up" className="git-form">
        <>
          <div data-aos="zoom-in-up" className="title-box neon-purple">
            <h2>{section5Title}</h2>
          </div>
        </>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half form-container">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="88c8660b-27df-4a3c-919e-a37d6183cdc8"/>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required
                ></input>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Subject"
                  required
                ></input>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half social-container">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {social.resume && (
                    <a
                      className="fab resume-style"
                      title="Download Resume"
                      href={social.resume}
                      download
                    >
                      <i className="fa-regular fa-file"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="Copy">2023 © Copyright. All Rights Reserved.</p>
    </div>
  );
};

export default Contact;
