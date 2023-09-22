
import React from "react";

const Trailer = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const videoStyle = {
    boxShadow: "2px -10px 80px rgba(128, 0, 128, 0.5)", 
    borderRadius:"2%"
  };

  return (
    <div className="video-container">
      <iframe
        width="710"
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
