import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/lucas-gesso/assets/lucasCentro.jpg",
  "/lucas-gesso/assets/lucasCenter1.jpg",
  "/lucas-gesso/assets/lucasCenter2.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-72 h-96 rounded-[5px] self-center overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Imagem ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out absolute top-0 left-0`}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transitionProperty: "opacity",
          }}
          priority={index === 0} // opcional, só a primeira imagem
        />
      ))}
    </div>
  );
}
