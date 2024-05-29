import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={`${className} slide-arrow next`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

// Custom Previous Arrow
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={`${className} slide-arrow prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export { CustomNextArrow, CustomPrevArrow };
