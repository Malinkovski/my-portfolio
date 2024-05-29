import React from "react";

const Skills = ({ label, svg, viewBox }) => {
  return (
    <div
      data-aos="fade-up"
      className="skill__square col-3 col-sm-2 my-3 mx-auto mt-5"
      
    >
          <svg
      width="800px"
      height="800px"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d={svg}
          fill="currentColor"
        />
      </g>
    </svg>
      <h6 className="mt-2">{label}</h6>
    </div>
  );
};

export default Skills;
