import React from "react";

const CardTopText = ({ text, children }) => {
  return (
    <div>
      <p className="ml-2 text-white font-semibold  text-[10px]">
        {text}
      </p>
      {children ? children : null}
    </div>
  );
};

export default CardTopText;
