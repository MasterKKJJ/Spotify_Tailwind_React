import { Library, CircleCheck, Heart } from "lucide-react";

function App() {
  return (
    <div className="bg-black gap-1 ">
      <div className=" flex flex-col w-screen min-h-screen pr-1 pl-1 pb-1">
        <header className="bg-black pl-1 h-[52px] min-h-full flex">
          <img
            className="flex justify-center   "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoqu5NlpRKmNa_cObB4Pkc9hlwr34MVdqIujQ26rlmtTsaefO0a1N_g8hHWfMKSPEiP8&usqp=CAU"
            alt="Spotify logo"
            width={52}
            height={52}
          />
        </header>
        <div className="flex flex-1 gap-2 ml-[2px] ">
          <aside className=" w-[336px]  bg-aside_spotify min-w-min text-aside_letter_spotify rounded-md p-3">
            <div className="flex hover:text-zinc-200 hover:cursor-pointer ">
              <Library />
              <p className="text-xs font-bold items-center justify-center pl-1 flex ">
                Sua Biblioteca
              </p>
            </div>
          </aside>
          <main className="flex-1 bg-main_bg_color rounded-md ">
            <div className="pl-8 pt-3">
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

              <div className="grid grid-cols-4  ">
                <div className="w-[190px]  bg-cor_componentes_musicas_main mt-4 rounded h-[40px] flex items-center">
                  <div className="bg-diagonalGradient w-10 h-full flex items-center justify-center rounded-l ">
                    <Heart width={16} height={16} />
                  </div>
                  <p className="ml-2 text-white font-semibold text-[10px]">
                    Músicas Curtidas
                  </p>
                </div>
                <div className="w-[190px] bg-cor_componentes_musicas_main mt-4 rounded h-[40px] flex items-center">
                  <div className="bg-diagonalGradient w-10 h-full flex items-center justify-center rounded-l ">
                    <Heart width={16} height={16} />
                  </div>
                  <p className="ml-2 text-white font-semibold text-[10px]">
                    Músicas Curtidas
                  </p>
                </div>
                <div className="w-[190px]   bg-cor_componentes_musicas_main mt-4 rounded h-[40px] flex items-center">
                  <div className="bg-diagonalGradient w-10 h-full flex items-center justify-center rounded-l ">
                    <Heart width={16} height={16} />
                  </div>
                  <p className="ml-2 text-white font-semibold text-[10px]">
                    Músicas Curtidas
                  </p>
                </div>
                <div className="w-[190px]   bg-cor_componentes_musicas_main mt-4 rounded h-[40px] flex items-center">
                  <div className="bg-diagonalGradient w-10 h-full flex items-center justify-center rounded-l ">
                    <Heart width={16} height={16} />
                  </div>
                  <p className="ml-2 text-white font-semibold text-[10px]">
                    Músicas Curtidas
                  </p>
                </div>
              </div>
            </div>
          </main>

          <aside className="w-[339px] h-auto bg-aside_spotify rounded-md p-3 ">
            <p className=" font-bold text-sm text-white hover:underline cursor-pointer">
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
                src="./public/download.jpg"
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
