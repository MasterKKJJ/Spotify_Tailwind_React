import { Library, CircleCheck, Heart, Search, Logs } from "lucide-react";
import { useState, useRef } from "react";

import { Card } from "./components/cards-main";

import { Card_Top } from "./components/cards_top_playlists";
import { Balao_Flutuante } from "./components/Balao_Text";
import "./App.css";
function App() {
  const containerRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const [background, setBackground] = useState(
    "linear-gradient(180deg, rgba(34, 34, 34, 1) 0%, rgba(18, 18, 18, 1) 45%)"
  );

  const texts = [
    "Músicas Curtidas",
    "Phonk",
    "Playlist para Qualquer Ocasião",
    "Greed",
    "Acad",
    "Rock Clássico",
    "Músicas Curtidas",
    "Phonk",
    "Playlist para Qualquer Ocasião",
    "Greed",
    "Acad",
    "Rock Clássico",
    "Músicas Chill"
  ];

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isBottom = scrollTop + clientHeight >= scrollHeight;
      setIsAtBottom(isBottom); // Atualiza o estado
    }
  };

  const handleMouseEnter = corrgba => {
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
          <aside className=" w-[336px] bg-aside_spotify min-w-min text-aside_letter_spotify rounded-md ">
            <div className="flex hover:text-zinc-200 p-3 hover:cursor-pointer  ">
              <Library />
              <p className="text-xs font-bold items-center justify-center pl-1 flex ">
                Sua Biblioteca
              </p>
            </div>
            <div className="h-max w-[310px] pl-3 pt-1 pb-1">
              {/* Componente com SCROLL ativado */}
              <Balao_Flutuante.Root scroll={true}>
                <Balao_Flutuante.Text>Playlists</Balao_Flutuante.Text>
                <Balao_Flutuante.Text>Artistas</Balao_Flutuante.Text>
                <Balao_Flutuante.Text>Álbuns</Balao_Flutuante.Text>

                <Balao_Flutuante.Text>
                  Podcasts e programação
                </Balao_Flutuante.Text>
              </Balao_Flutuante.Root>
            </div>

            <div className="pl-3">
              <div className="max-h-[520px] overflow-y-auto scrollbar-custom scrollbar-custom-hover">
                <div className="flex ml-1 mr-3 justify-between hover:text-zinc-200 hover:cursor-pointer mt-3">
                  <Search size={15} />
                  <div className="flex flex-row gap-1 justify-center items-center">
                    <p className="text-text_xss">Recentes</p>
                    <Logs size={15} />
                  </div>
                </div>
                <div className="flex flex-col">
                  {texts.map((text, index) =>
                    <div key={index} className="mt-4">
                      <Card_Top.Root
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        NoBackground={true}
                      >
                        <Card_Top.Icon icon={<Heart />} />
                        <Card_Top.Text text={text}>
                          <Card_Top.Mini_Text mini_text="PlayList 1200 músicas" />
                        </Card_Top.Text>
                      </Card_Top.Root>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>
          <main
            className="flex-1 bg-grau180_main_cor_qualquer rounded-md transition-all duration-300 "
            style={{ background }}
          >
            <div className="pl-8 pt-3 ">
              <Balao_Flutuante.Root>
                <Balao_Flutuante.Text classPlus="bg-white text-black">
                  Tudo
                </Balao_Flutuante.Text>
                <Balao_Flutuante.Text>Músicas</Balao_Flutuante.Text>
                <Balao_Flutuante.Text>Podcasts</Balao_Flutuante.Text>
              </Balao_Flutuante.Root>

              <div className="flex gap-2 mt-4 pb-10">
                <Card_Top.Root
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  corrgba="rgba(60, 85, 76, 0.5)"
                >
                  <Card_Top.Icon icon={<Heart />} />
                  <Card_Top.Text text="Músicas Favoritas" />
                </Card_Top.Root>
                <Card_Top.Root
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  corrgba="rgba(52, 39, 88, 0.5)"
                >
                  <Card_Top.Icon icon="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72cb41480116c4785c5bc8234f2" />
                  <Card_Top.Text text="Pagode - Os Melhores (Anos 90 - 2025)" />
                </Card_Top.Root>
                <Card_Top.Root
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  corrgba="rgba(138, 117, 150, 0.3)"
                >
                  <Card_Top.Icon icon="https://i.scdn.co/image/ab67616d00004851c80fe27586c2da910984cb9a" />
                  <Card_Top.Text text="phonk" />
                </Card_Top.Root>

                <Card_Top.Root
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  corrgba="rgba(60, 85, 76, 0.6)"
                >
                  <Card_Top.Icon icon="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c3900bf39038d74b442740542" />
                  <Card_Top.Text text="25 Days of Christmas" />
                </Card_Top.Root>
              </div>
              <p className="font-bold text-lg mb-3 text-white hover:underline cursor-pointer  w-max">
                Feito para Master
              </p>

              <section className=" flex flex-row overflow-hidden   max-w-screen-md ">
                <Card.Root>
                  <Card.Content>
                    <Card.Icon src="/download.jpg" alt="Logo" />
                    <Card.Text titulo="NLE Chopa, 1nonly, fam0uz e mais " />
                  </Card.Content>
                </Card.Root>

                <Card.Root>
                  <Card.Content>
                    <Card.Icon src="/download.jpg" alt="Logo" />
                    <Card.Text titulo="NLE Chopa, 1nonly, fam0uz e mais " />
                  </Card.Content>
                </Card.Root>

                <Card.Root>
                  <Card.Content>
                    <Card.Icon src="/download.jpg" alt="Logo" />
                    <Card.Text titulo="NLE Chopa, 1nonly, fam0uz e mais " />
                  </Card.Content>
                </Card.Root>

                <Card.Root>
                  <Card.Content>
                    <Card.Icon src="/download.jpg" alt="Logo" />
                    <Card.Text titulo="NLE Chopa, 1nonly, fam0uz e mais " />
                  </Card.Content>
                </Card.Root>
              </section>

              <p className="font-bold text-lg mb-3 text-white hover:underline cursor-pointer ">
                Seus mixes mais ouvidos
              </p>
            </div>
          </main>

          <aside className="w-[339px] h-auto bg-aside_spotify rounded-md p-4 flex ">
            <div>
              <p className="absolute flex font-semibold text-xs text-white hover:underline cursor-pointer">
                Músicas Curtidas
              </p>
            </div>
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
            <div className="text-white">
              <div className="">Player</div>
            </div>
            <div className="text-white">Volume</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
