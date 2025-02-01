import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Balao_Text_Root({ children, scroll = false }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = direction => {
    if (scrollRef.current) {
      const scrollAmount = 150;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleScrollCheck = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
          scrollRef.current.scrollWidth
      );
    }
  };

  if (!scroll) {
    return (
      <div className="flex gap-2">
        {children}
      </div>
    );
  }

  return (
    <div className="relative max-w-lg mx-auto ">
      {/* Botão Esquerdo */}
      {canScrollLeft &&
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-900 p-1 rounded-full text-white z-10"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft size={16} />
        </button>}
      {/* Área de Scroll */}
      <div
        ref={scrollRef}
        onScroll={handleScrollCheck}
        className="flex overflow-x-hidden space-x-[7px]"
      >
        {children}
      </div>
      {/* Botão Direito */}
      {canScrollRight &&
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2  bg-zinc-900 p-1 rounded-full text-white z-10"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight size={16} /> {/* Reduzido o tamanho do ícone para 16 */}
        </button>}
    </div>
  );
}

export default Balao_Text_Root;
