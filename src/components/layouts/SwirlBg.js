import React from "react";
import NeonParticles from "../../images/neon2.mp4";

const SwirlBg = () => {

  return (
    <div className="video-container">
      <div>
        <video
          src={NeonParticles}
          autoPlay
          loop
          muted
          className="background-video"
        />
      </div>
    </div>
  );
};

export default SwirlBg;
