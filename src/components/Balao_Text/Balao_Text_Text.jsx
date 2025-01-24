function Balao_Text_Text({ children, classPlus }) {
  const classes = classPlus
    ? `rounded-full flex justify-center items-center px-2 py-1 text-text_xss hover:bg-white/80 transition-all ${classPlus}`
    : "rounded-full flex justify-center items-center px-2 py-1 text-white bg-white/10 text-text_xss hover:bg-white/20 transition-all";
  return (
    <button className={`${classes}`}>
      {children}
    </button>
  );
}

export default Balao_Text_Text;
