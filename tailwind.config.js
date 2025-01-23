/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Configuração dos arquivos a serem analisados
  theme: {
    extend: {
      colors: {
        aside_spotify: "#121212", // Cor do fundo lateral estilo Spotify
        aside_letter_spotify: "#B3B3B3", // Cor para texto lateral
        main_bg_color: "#2F2759", // Cor personalizada para o fundo principal
        cor_letra_cantor: "#A0A0A0",
        cor_componentes_musicas_main: "#3D3757"
      },
      fontSize: {
        text_xss: "0.70rem"
      },
      backgroundImage: {
        diagonalGradient:
          "linear-gradient(125deg, rgba(74,18,240,1) 0%, rgba(130,121,228,1) 50%, rgba(188,232,215,1) 100%);  "
      }
    }
  },
  plugins: [] // Adicione plugins aqui, se necessário
};
