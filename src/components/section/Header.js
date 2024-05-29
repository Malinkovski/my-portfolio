import React from "react";
import { useEffect, useState } from "react";
import HeaderButton from "../layouts/HeaderButton";
import SwirlBg from "../layouts/SwirlBg";
import "../../styles/main.css";
import ContactMeButton from "../layouts/ContactMeButton";
/*  import SwirlAnimation from "../layouts/SwirlAnimation";  */

const Header = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      setIsAtBottom(bottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="Header">
         {/* <SwirlAnimation />  */} {/* HIGH PERFORMANCE INTENSIVE / GPU */}
          <SwirlBg/> {/* VIDEO BACKGROUND */}
        <div className="heading neon">
          <h3>
            {" "}
            H<span className="delay8">e</span>ll
            <span className="delay7">o</span>!
          </h3>
          <h1>
            I'<span className="delay1">m</span> I
            <span className="delay3">l</span>i<span className="delay4">j</span>
            a,
          </h1>
          <h1>
            <span className="delay2">W</span>e<span className="delay6">l</span>
            co
            <span className="delay5">m</span>e
          </h1>
          <p className="line-1 anim-typewriter">this is my portfolio site!</p>
        </div>
        <HeaderButton />
      </div>
      <ContactMeButton className={isAtBottom ? "hide" : ""} />
    </div>
  );
};

export default Header;
