import React from "react";

const Card_Main_Icon = ({ src, alt = "Logo" }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={src}
        alt={alt}
        style={{ filter: "brightness(0.7)" }}
      />
    </div>
  );
};

export default Card_Main_Icon;
