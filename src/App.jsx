import { Library, CircleCheck, Heart } from "lucide-react";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState(
    "linear-gradient(180deg, rgba(34, 34, 34, 1) 0%, rgba(18, 18, 18, 1) 45%)"
  );

  const handleMouseEnter = corrgba => {
    console.log(
      "linear-gradient(180deg, " + corrgba + " 0%, rgba(18, 18, 18, 1) 30%)"
    );
    setBackground(
      "linear-gradient(180deg, " + corrgba + " 0%, rgba(18, 18, 18, 1) 30%)"
    );
  };

  const handleMouseLeave = () => {
    setBackground(background);
  };

  return (
    <div className="bg-black gap-1 ">
      <div className=" flex flex-col w-screen min-h-screen pr-1 pl-1 pb-1 ">
        <header className="bg-black pl-1 h-[52px] min-h-full flex">
          <img
            className="flex justify-center   "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoqu5NlpRKmNa_cObB4Pkc9hlwr34MVdqIujQ26rlmtTsaefO0a1N_g8hHWfMKSPEiP8&usqp=CAU"
            alt="Spotify logo"
            width={52}
            height={52}
          />
        </header>
        <div className="flex flex-1  ml-[2px] gap-2">
          <aside className=" w-[336px]  bg-aside_spotify min-w-min text-aside_letter_spotify rounded-md p-3">
            <div className="flex hover:text-zinc-200 hover:cursor-pointer ">
              <Library />
              <p className="text-xs font-bold items-center justify-center pl-1 flex ">
                Sua Biblioteca
              </p>
            </div>
          </aside>
          <main
            className="flex-1 bg-grau180_main_cor_qualquer rounded-md transition-all duration-300 "
            style={{ background }}
          >
            <div className="pl-8 pt-3 ">
              <div className=" flex gap-2 ">
                {/* Botão "Tudo" */}
                <button className="rounded-full flex justify-center items-center px-2 py-1 text-black bg-white text-text_xss text hover:bg-white/90 transition-all">
                  Tudo
                </button>
                {/* Botão "Músicas" */}
                <button className="rounded-full flex justify-center items-center px-2 py-1 text-white bg-white/10  text-text_xss hover:bg-white/20 transition-all">
                  Músicas
                </button>
                {/* Botão "Podcasts" */}
                <button className="rounded-full flex justify-center items-center px-2 py-1 text-white bg-white/10 text-text_xss hover:bg-white/20 transition-all">
                  Podcasts
                </button>
              </div>

              <div className="flex gap-2 mt-4 pb-10">
                <div
                  onMouseEnter={() => handleMouseEnter("rgba(60, 85, 76, 0.5)")}
                  onMouseLeave={handleMouseLeave}
                  className="w-[188px] transition-all duration-300 bg-cor_componentes_musicas_main  rounded h-[38px] flex items-center"
                >
                  <div className="bg-diagonalGradient w-[38px] h-full flex items-center justify-center rounded-l ">
                    <Heart width={16} height={16} />
                  </div>
                  <p className="ml-2 text-white font-semibold flex-1 text-[10px]">
                    Músicas Curtidas
                  </p>
                </div>
                <div
                  onMouseEnter={() => handleMouseEnter("rgba(52, 39, 88, 0.5)")}
                  onMouseLeave={handleMouseLeave}
                  className="w-[188px] bg-cor_componentes_musicas_main  rounded h-[38px] flex items-center"
                >
                  <div className="bg-diagonalGradient w-[38px] h-full flex  items-center justify-center rounded-l ">
                    <img
                      className="h-full w-full rounded-l"
                      src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b41480116c4785c5bc8234f2"
                    />
                  </div>
                  <p className="ml-2 text-white flex-1 font-semibold text-[10px]">
                    Pagode - Os Melhores (Anos 90 - 2025)
                  </p>
                </div>
                <div
                  onMouseEnter={() =>
                    handleMouseEnter("rgba(138, 117, 150, 0.3)")}
                  onMouseLeave={handleMouseLeave}
                  className="w-[188px]  bg-cor_componentes_musicas_main  rounded h-[38px] flex items-center"
                >
                  <div className="bg-diagonalGradient w-[38px] h-full flex items-center justify-center rounded-l ">
                    <img
                      className="h-full w-full rounded-l"
                      src="https://i.scdn.co/image/ab67616d00004851c80fe27586c2da910984cb9a"
                    />
                  </div>
                  <p className="ml-2 text-white font-semibold flex-1 text-[10px]">
                    phonk
                  </p>
                </div>
                <div
                  onMouseEnter={() => handleMouseEnter("rgba(60, 85, 76, 0.6)")}
                  onMouseLeave={handleMouseLeave}
                  className="w-[188px]  bg-cor_componentes_musicas_main  rounded h-[38px] flex items-center"
                >
                  <div className="bg-diagonalGradient w-[38px] h-full flex items-center justify-center rounded-l ">
                    <img
                      className="h-full w-full rounded-l"
                      src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c3900bf39038d74b442740542"
                    />
                  </div>
                  <p className="ml-2 text-white font-semibold flex-1 text-[10px]">
                    25 Days of Christmas
                  </p>
                </div>
              </div>
              <p className="font-bold text-lg mb-3 text-white hover:underline cursor-pointer ">
                Feito para Master
              </p>
              <section className=" flex flex-row overflow-hidden   max-w-screen-md ">
                <div className="text-white">
                  <div>
                    <div className="rounded-md hover:bg-zinc-600/20 transition-all duration-200 p-2 flex relative flex-col h-[200px] w-[154px] grou">
                      {/* Contêiner de Hover */}
                      <div className="rounded-md overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src="/download.jpg"
                          alt="Logo"
                          style={{ filter: "brightness(0.7)" }}
                        />
                      </div>
                      {/* Texto */}
                      <p className="text-[10px] text-zinc-400 overflow-hidden mt-2">
                        NLE Chopa, 1nonly, fam0uz e mais
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-white">
                  <div>
                    <div className="rounded-md hover:bg-zinc-600/20 transition-all duration-200 p-2 flex relative flex-col h-[200px] w-[154px] grou">
                      {/* Contêiner de Hover */}
                      <div className="rounded-md overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src="/download.jpg"
                          alt="Logo"
                          style={{ filter: "brightness(0.7)" }}
                        />
                      </div>
                      {/* Texto */}
                      <p className="text-[10px] text-zinc-400 overflow-hidden mt-2">
                        NLE Chopa, 1nonly, fam0uz e mais
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-white">
                  <div>
                    <div className="rounded-md hover:bg-zinc-600/20 transition-all duration-200 p-2 flex relative flex-col h-[200px] w-[154px] grou">
                      {/* Contêiner de Hover */}
                      <div className="rounded-md overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src="/download.jpg"
                          alt="Logo"
                          style={{ filter: "brightness(0.7)" }}
                        />
                      </div>
                      {/* Texto */}
                      <p className="text-[10px] text-zinc-400 overflow-hidden mt-2">
                        NLE Chopa, 1nonly, fam0uz e mais
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-white">
                  <div>
                    <div className="rounded-md hover:bg-zinc-600/20 transition-all duration-200 p-2 flex relative flex-col h-[200px] w-[154px] grou">
                      {/* Contêiner de Hover */}
                      <div className="rounded-md overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src="/download.jpg"
                          alt="Logo"
                          style={{ filter: "brightness(0.7)" }}
                        />
                      </div>
                      {/* Texto */}
                      <p className="text-[10px] text-zinc-400 overflow-hidden mt-2">
                        NLE Chopa, 1nonly, fam0uz e mais
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>

          <aside className="w-[339px] h-auto bg-aside_spotify rounded-md p-4 flex ">
            <p className=" font-semibold text-xs text-white hover:underline cursor-pointer">
              Músicas Curtidas
            </p>
          </aside>
        </div>
        <footer className="bg-black rounded h-[70px] ml-1 ">
          <div className="flex justify-between items-center min-h-full  pl-3 gap-2 ">
            <div className="flex items-center ">
              <img
                width={40}
                height={40}
                src="download.jpg"
                alt="Foto da Música"
              />
              <div>
                <p className="text-white text-xs font-semibold">
                  HIIT - SUPER SLOWED
                </p>
                <p className="text-cor_letra_cantor text-text_xss">
                  2KE, TREN, MC DA 12
                </p>
              </div>
              <CircleCheck
                width={16}
                height={16}
                className="bg-green-500 rounded-full ml-2 "
              />
            </div>
            <div className="text-white">Player</div>
            <div className="text-white">Volume</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
