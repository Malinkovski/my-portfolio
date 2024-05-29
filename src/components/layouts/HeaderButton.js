import React from "react";

const HeaderButton = () => {
  const handleClick = () => {
    // Scroll to 100vh when the button is clicked
    window.scrollTo({
      top: window.innerHeight -50, // 100vh
      behavior: "smooth" // Smooth scroll
    });
  };

  return (
    <div>
      <button className="portfolio-btn neon-btn" onClick={handleClick}>
        Checkout<i className="fas fa-eye"></i>
      </button>
    </div>
  );
};

export default HeaderButton;
