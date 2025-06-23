import { Bree_Serif, Open_Sans } from "next/font/google";
import { Tag } from "../components/Tag";

import ImageSlider from "../components/ImgCenterSlider";
import ImageSliderUnit from "../components/ImageSliderUnit";

const bree = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"], // ou outras variações que precisar
  variable: "--font-bree", // opcional, para usar CSS variables
});

const open = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // variações comuns
  variable: "--font-open",
});

export default function Home() {
  const tags = [
    "FORRO",
    "PINTURA",
    "GESSO",
    "REVESTIMENTO",
    "DECORAÇÃO",
    "PAREDE",
    "MOLDURA",
    "SANCAS",
    "CLOSET",
    "DRYWALL",
    "ELÉTRICA",
    "GESSO",
    "FORRO ACARTONADO",
    "PERFIL DE LED",
  ];
  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`w-full px-4 py-3 bg-green-600 flex justify-between items-center`}
      >
        <h2 className="text-white text-[18px] font-['Bree_Serif']">
          LUCAS GESSO
        </h2>
        <div className="flex">
          <a
            href="#contatos"
            className="
            px-3 py-2 rounded-full
            inline-flex justify-center items-center
            no-underline text-white
            hover:bg-white hover:text-green-600
            transition-colors duration-300 ease-in-out font-['Open_Sans'] font-semibold
        "
          >
            Contatos
          </a>
          <a
            href="#servicos"
            className="
            px-3 py-2 rounded-full
            inline-flex justify-center items-center
            no-underline text-white
            hover:bg-white hover:text-green-600
            transition-colors duration-300 ease-in-out font-['Open_Sans'] font-semibold
        "
          >
            Serviços
          </a>
        </div>
      </nav>

      <section className="mt-4 px-4 flex flex-col gap-4">
        <h2 className={`${bree.className} text-2xl w-full text-center`}>
          Gesseiro profissional a mais de 10 anos no mercado
        </h2>
        <p className={`${open.className} w-full`}>
          Faço serviços em Fortaleza, Maracanaú, Aquiraz, Eusébio, Caucaia,
          Maranguape
        </p>
        <button
          onClick={() => {
            window.open("https://wa.me/5585985624095", "_blank");
          }}
          className={`self-center p-2.5 bg-green-600 rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] justify-center items-center gap-2.5 animate-wiggle-x transition-all duration-300 hover:bg-green-500 hover:scale-105 active:scale-95 text-white text-sm font-bold ${open.className}`}
        >
          SOLICITE JÁ UM ORÇAMENTO
        </button>
        <ImageSlider />
      </section>

      <section id="servicos" className="mt-4 px-4 flex flex-col gap-4">
        <h3 className={`${bree.className} text-xl w-full text-center`}>
          Meus Serviços
        </h3>
        {/* imagens */}
        <div className="grid grid-cols-2 gap-3 px-7">
          <ImageSliderUnit
            images={[
              "/assets/servicos/lucasS1.jpg",
              "/assets/servicos/lucasS2.jpg",
            ]}
            alt="Imagem 1"
          />
          <ImageSliderUnit
            images={[
              "/assets/servicos/lucasS3.jpg",
              "/assets/servicos/lucasS4.jpg",
            ]}
            alt="Imagem 2"
          />
          <ImageSliderUnit
            images={[
              "/assets/servicos/lucasS5.jpg",
              "/assets/servicos/lucasS6.jpg",
            ]}
            alt="Imagem 3"
          />
          <ImageSliderUnit
            images={[
              "/assets/servicos/lucasS7.jpg",
              "/assets/servicos/lucasS8.jpg",
            ]}
            alt="Imagem 4"
          />
        </div>
        {/* tags */}
        <div className="w-full flex flex-wrap justify-between gap-y-2 px-7">
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>
      </section>

      <section
        id="contatos"
        className="w-full mt-4 items-center flex flex-col gap-4"
      >
        <h3 className={`${bree.className} text-xl w-full text-center`}>
          Contatos
        </h3>
        {/* contatos */}
        <div
          onClick={() => {
            window.open("https://wa.me/5585985624095", "_blank");
          }}
          className="px-[5px] py-0.5 w-auto outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-0.5 animate-wiggle-x transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 256 258"
          >
            <defs>
              <linearGradient
                id="logosWhatsappIcon0"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#1faf38"></stop>
                <stop offset="100%" stopColor="#60d669"></stop>
              </linearGradient>
              <linearGradient
                id="logosWhatsappIcon1"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f9f9f9"></stop>
                <stop offset="100%" stopColor="#fff"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#logosWhatsappIcon0)"
              d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
            ></path>
            <path
              fill="url(#logosWhatsappIcon1)"
              d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
            ></path>
            <path
              fill="#fff"
              d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
            ></path>
          </svg>
          <div className="inline-flex flex-col justify-start items-center">
            <p className="text-center justify-start text-black text-base font-normal font-['Bree_Serif']">
              Faça seu Orçamento
            </p>
            <p className="justify-start text-green-600 text-sm font-normal font-['Bree_Serif'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
              Clique aqui!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
