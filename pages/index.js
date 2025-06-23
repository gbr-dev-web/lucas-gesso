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
    
    <main>
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
        <p className={`${open.className} w-full text-center`}>
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
        className="w-full my-4 items-center flex flex-col gap-4"
      >
        <h3 className={`${bree.className} text-xl w-full text-center`}>
          Contatos
        </h3>
        {/* contatos */}
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {/* whatsapp */}
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
          {/* telefone */}
          <div
            onClick={() => {
              window.open("tel:+5585985624095");
            }}
            className="px-[5px] py-0.5 w-auto outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-0.5 animate-wiggle-x transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="#0076ff"
                  d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
                ></path>
              </g>
            </svg>
            <div className="inline-flex flex-col justify-start items-center">
              <p className="text-center justify-start text-black text-base font-normal font-['Bree_Serif']">
                Faça seu Orçamento
              </p>
              <p className="justify-start text-[#0076ff] text-sm font-normal font-['Bree_Serif'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
                Clique aqui!
              </p>
            </div>
          </div>
          {/* gmail */}
          <div
            onClick={() => {
              window.open("mailto:lucassilvagesso@gmail.com", "_blank");
            }}
            className="px-[5px] py-0.5 w-auto outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-0.5 animate-wiggle-x transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 256 193"
            >
              <path
                fill="#4285f4"
                d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
              ></path>
              <path
                fill="#34a853"
                d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
              ></path>
              <path
                fill="#ea4335"
                d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
              ></path>
              <path
                fill="#fbbc04"
                d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
              ></path>
              <path
                fill="#c5221f"
                d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
              ></path>
            </svg>
            <div className="inline-flex flex-col justify-start items-center">
              <p className="text-center justify-start text-black text-base font-normal font-['Bree_Serif']">
                Faça seu Orçamento
              </p>
              <p className="justify-start text-[#c5221f] text-sm font-normal font-['Bree_Serif'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
                Clique aqui!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-black text-white text-center py-2 text-sm italic cursor-pointer">
        Criado por
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gbr-dev-web.github.io/"
        >
          Gabriel Martins
        </a>
      </footer>
    </main>
  );
}
