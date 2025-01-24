import React from "react";

// Arrumar as coisas da div!
function Card_Top_Root({ children,handleMouseEnter,handleMouseLeave,corrgba  }) {
  return (
    <div
    onMouseEnter={() => handleMouseEnter(corrgba)}
    onMouseLeave={handleMouseLeave}
    className="w-[188px] transition-all duration-300 bg-cor_componentes_musicas_main  rounded h-[38px] flex items-center">
      {children}
    </div>
  );
}

export default Card_Top_Root;
