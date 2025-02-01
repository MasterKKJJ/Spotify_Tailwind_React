import React from "react";

function Card_Top_Mini_Text({ mini_text }) {
  return (
    <div>
      <p className="ml-2 text-white flex-1 text-[9px] whitespace-nowrap">
        {mini_text}
      </p>
    </div>
  );
}

export default Card_Top_Mini_Text;
