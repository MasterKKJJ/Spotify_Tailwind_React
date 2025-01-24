import { Library, CircleCheck, Heart } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Card } from "./components/cards-main";
import Card_Top_Icon from "./components/cards_top_playlists/Card_Top_Icon";
import { Card_Top } from "./components/cards_top_playlists";
import { Balao_Flutuante } from "./components/Balao_Text";
function App() {
  const [background, setBackground] = useState(
    "linear-gradient(180deg, rgba(34, 34, 34, 1) 0%, rgba(18, 18, 18, 1) 45%)"
  );

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
                  <Card_Top.Icon icon="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b41480116c4785c5bc8234f2" />
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
                    <Card.Text titulo="Carlla Cabeçuda" />
                  </Card.Content>
                </Card.Root>
              </section>

              <p className="font-bold text-lg mb-3 text-white hover:underline cursor-pointer ">
                Seus mixes mais ouvidos
              </p>
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
            <div className="text-white">
              <div className="border">Player</div>
            </div>
            <div className="text-white">Volume</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
