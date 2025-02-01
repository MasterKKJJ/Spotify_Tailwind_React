import React from "react";

// Arrumar as coisas da div!
function Card_Top_Root({
  children,
  handleMouseEnter,
  handleMouseLeave,
  classPlus,
  NoBackground,
  corrgba
}) {
  return (
    <div
      onMouseEnter={() => handleMouseEnter(corrgba)}
      onMouseLeave={handleMouseLeave}
      // w-[188px] transition-all duration-300 bg-cor_componentes_musicas_main  rounded h-[38px] flex items-center
      className={`w-[188px] transition-all duration-300  rounded h-[38px] flex items-center ${NoBackground
        ? "w-full"
        : `bg-cor_componentes_musicas_main  ${classPlus || ""}`}`}
    >
      {children}
    </div>
  );
}

export default Card_Top_Root;
