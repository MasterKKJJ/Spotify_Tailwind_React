import React from "react";

const Card_Main_Conteudo = ({ children }) => {
  return (
    <div className="rounded-md hover:bg-zinc-600/20 transition-all duration-200 p-2 flex relative flex-col h-[200px] w-[154px] grou">
      {children}
    </div>
  );
};

export default Card_Main_Conteudo;
