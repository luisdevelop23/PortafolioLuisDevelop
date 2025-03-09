import React, { useEffect, useState } from "react";
import userImg from "../../assets/user.jpg";

const AboutImage = () => {
  const greetings = [
    "¡Hola!",
    "Hello!",
    "Bonjour!",
    "Hallo!",
    "Ciao!",
    "Olá!",
    "Привет!",
    "こんにちは!",
    "안녕하세요!",
    "你好!",
    "नमस्ते!",
    "مرحبًا!",
    "Χαίρετε!",
    "שלום!",
    "Sawubona!",
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!",
  ];

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentGreeting((prev) => {
          const nextIndex = (greetings.indexOf(prev) + 1) % greetings.length;
          return greetings[nextIndex];
        });
        setIsVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="col-span-3  bg-[#0083c45e]  pt-5 md:pt-10 rounded-[20px] md:rounded-[40px] flex flex-col justify-end items-center">
      <img src={userImg} className="w-80 rounded-full" alt="User" />
      <h1
        className={` text-[3.5rem] py-8  font-bold font-sans text-zinc-800 text-center AcornSemiBold transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentGreeting}
      </h1>
    </div>
  );
};

export default AboutImage;
