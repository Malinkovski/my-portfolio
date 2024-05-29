import React from "react";

const ContactMeButton = ({ className }) => {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={scrollTo} className={`gtp ${className}`}>
      <i className="far fa-envelope mail-me"><span>Contact Me!</span></i>
    </div>
  );
};

export default ContactMeButton;
