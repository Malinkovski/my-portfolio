import React from "react";
import { useEffect, useRef } from "react";

const Cursor = () => {
    const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.top = e.clientY - 10 + "px";
      cursor.style.left = e.clientX - 10 + "px";
    };

    const handleClick = () => {
      cursor.classList.add("expand");

      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", handleClick);
    };
  }, []);

    

  return (
    <div ref={cursorRef} className="cursor"></div>
  );
};

export default Cursor;