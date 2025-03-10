import { useEffect, useState } from "react";
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
    <div className="col-span-1 flex h-full flex-col items-center justify-center rounded-[20px] bg-[#0083c45e] pt-5 md:col-span-4 md:rounded-[40px] md:pt-10 lg:col-span-3">
      <img
        src={userImg}
        className="w-70 rounded-full md:w-70 lg:w-80"
        alt="User"
      />
      <h1
        className={`AcornSemiBold py-8 text-center font-sans text-[3.5rem] font-bold text-zinc-800 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentGreeting}
      </h1>
    </div>
  );
};

export default AboutImage;
