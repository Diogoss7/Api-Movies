import React, { useState, useEffect } from "react";

const Trailer = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 712);

  const videoStyle = {
    boxShadow: "2px -10px 80px rgba(128, 0, 128, 0.5)",
    borderRadius: "2%",
    marginLeft:"10px"
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 712);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <div className="video-container">
      <iframe
        width={isSmallScreen ? "310" : "710"}
        height="450"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={videoStyle}
      ></iframe>
    </div>
  );
};

export default Trailer;
