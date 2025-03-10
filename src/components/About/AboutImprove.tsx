import { useEffect, useState } from "react";
import es1 from "../../assets/aboutes1.jpg";
import es2 from "../../assets/aboutes2.jpg";

const images = [es1, es2];

const AboutImprove = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative col-span-1 row-span-1 gap-10 overflow-hidden rounded-2xl bg-[#ffffff85] p-5 md:col-span-6 md:col-start-1 md:row-span-2 md:row-start-7 lg:col-span-2 lg:col-start-5 lg:row-span-6">
      <h1 className="AcornBold text-[2rem] font-semibold text-zinc-900 md:text-[1.5rem] lg:text-[1.8rem]">
        Constantly improve
      </h1>
      <p className="text-[1.2rem] font-semibold text-zinc-700 md:text-[1.1rem] lg:text-[1.2rem]">
        It's not about the equipment you start with, but how you evolve with it.
        From a 2012 laptop to a complete setup, but the biggest improvement has
        been in my knowledge.
      </p>

      {/* Contenedor de imagen con animación */}
      <div className="relative mt-2 flex h-[400px] md:h-[500px] w-full items-center justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute h-[400px]  md:h-full w-full rounded-2xl object-cover transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            alt={`Setup ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutImprove;
