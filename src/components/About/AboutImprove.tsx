import React, { useState, useEffect } from "react";
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
    <div className="relative w-full col-span-2 row-span-6 col-start-5 row-start-1 gap-10 bg-[#ffffff85] rounded-2xl p-5 overflow-hidden">
      <h1 className="md:text-[2rem] text-[2rem] sm:text-[3.5rem] font-semibold AcornBold text-zinc-900">
        Constantly improve
      </h1>
      <p className="md:text-[1.2rem] text-[1.2rem] sm:text-[1.5rem] font-semibold text-zinc-700">
        It's not about the equipment you start with, but how you evolve with it.
        From a 2012 laptop to a complete setup, but the biggest improvement has
        been in my knowledge.
      </p>

      {/* Contenedor de imagen con animación */}
      <div className="relative w-full  h-[500px] mt-2 flex justify-center items-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute rounded-2xl w-full h-full object-cover transition-opacity duration-1000 ${
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
