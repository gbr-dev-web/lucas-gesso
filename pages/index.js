import { Bree_Serif, Open_Sans } from "next/font/google";
import dynamic from "next/dynamic";

const ImageSlider = dynamic(() => import("../components/ImgCenterSlider"), {
  ssr: false,
  loading: () => <p>Carregando...</p>,
});
const ImageSliderUnit = dynamic(() => import("../components/ImageSliderUnit"), {
  ssr: false,
  loading: () => <p>Carregando...</p>,
});


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
  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`${bree.className} w-full px-4 py-3 bg-green-600 flex justify-between items-center`}
      >
        <h2 className="text-white text-[18px]">LUCAS GESSO</h2>
        <a
          href="#contatos"
          className="
            px-3 py-2 rounded-full
            inline-flex justify-center items-center
            no-underline text-white
            hover:bg-white hover:text-green-600
            transition-colors duration-300 ease-in-out
        "
        >
          Contatos
        </a>
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

      <section className="mt-4 px-4 flex flex-col gap-4">
        <h3 className={`${bree.className} text-xl w-full text-center`}>
          Meus Serviços
        </h3>
        <div className="grid grid-cols-2 gap-3 px-7">
          <ImageSliderUnit
            images={["/assets/servicos/lucasS1.jpg", "/assets/servicos/lucasS2.jpg"]}
            alt="Imagem 1"
          />
          <ImageSliderUnit
            images={["/assets/servicos/lucasS3.jpg", "/assets/servicos/lucasS4.jpg"]}
            alt="Imagem 2"
          />
          <ImageSliderUnit
            images={["/assets/servicos/lucasS5.jpg", "/assets/servicos/lucasS6.jpg"]}
            alt="Imagem 3"
          />
          <ImageSliderUnit
            images={["/assets/servicos/lucasS7.jpg", "/assets/servicos/lucasS8.jpg"]}
            alt="Imagem 4"
          />
        </div>
      </section>
    </>
  );
}
