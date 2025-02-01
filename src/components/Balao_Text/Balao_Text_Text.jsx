import React from "react";

function Balao_Text_Text({ children, classPlus }) {
  const classes = classPlus
    ? `rounded-full flex justify-center items-center px-2 py-1 text-text_xss hover:bg-white/80  whitespace-nowrap transition-all ${classPlus}`
    : "rounded-full flex justify-center items-center px-2 text-text_xss py-1 text-white bg-white/10   whitespace-nowrap text-text_xss hover:bg-white/20 transition-all";

  return (
    <button className={classes}>
      {children}
    </button>
  );
}

export default Balao_Text_Text;
