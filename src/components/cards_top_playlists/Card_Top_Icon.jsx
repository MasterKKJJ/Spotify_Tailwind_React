import React from "react";
function Card_Top_Icon({ icon }) {
  return (
    <div className="bg-diagonalGradient flex-shrink-0 w-[38px] h-full flex items-center justify-center rounded-l">
      {React.isValidElement(icon)
        ? icon // Renderizar imagem se for um arquivo de imagem
        : <img
            className="min-h-full object-cover min-w-full rounded-l "
            src={icon}
            alt="icon"
          />}
    </div>
  );
}

export default Card_Top_Icon;
