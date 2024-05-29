import React from "react";

const Project = ({ id, name, url, skills }) => {
  return (
    <div data-aos="fade-up" className="project-card">
      <div className="image-project">
        <div className={`img-pro ${id}`}></div>
      </div>
      <div className="link-to">
        <span className="project-name">{name}</span>
        <a
          title={url}
          className=""
          rel="noopener noreferrer"
          target="_blank"
          href={url}
        >
          <button className="neon-btn-card">Github</button>
        </a>
      </div>
      <div className="skills-list">{skills && <p>{skills.map((skill) => skill)}</p>}</div>
    </div>
  );
};

export default Project;
