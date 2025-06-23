import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ImageSliderUnit({ images, alt }) {
  const [index, setIndex] = useState(0);
  const { basePath } = useRouter();

  // Aplica basePath a cada caminho da imagem
  const imagesWithBasePath = images.map((src) => `${basePath}${src}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagesWithBasePath.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesWithBasePath.length]);

  return (
    <div className="w-full aspect-[129/100] overflow-hidden rounded-[5px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative">
      {imagesWithBasePath.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          fill
          priority={i === 0}
          className={`object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      ))}
    </div>
  );
}
