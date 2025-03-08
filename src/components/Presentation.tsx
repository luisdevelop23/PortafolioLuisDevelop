import React from "react";
import coding from "../assets/coding.webp";
const Presentation = () => {
  return (
    <section className="group flex flex-col lg:flex-row gap-5 lg:gap-10 bg-[#ffffffd7] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] transition-all duration-300 hover:bg-[#ffffff] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer">
      <div className="w-1/2 flex flex-col justify-between ">
        <h1 className="text-3xl AcornSemiBold">
          Efficiency and Quality is not an option, it is a necessity.
        </h1>
        <div>
          <p className="mt-5 text-xl text-left">
            As a Full Stack developer, I specialize in creating efficient and
            optimized applications for the client, applying good development
            practices.
          </p>
          <p className="mt-5 text-xl text-left">
            I prioritize scalability, writing clean and adaptable code,
            guaranteeing long-term sustainable solutions.
          </p>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/luissaavedradev/"
            className="text-zinc-800 font-bold font-sans text-xl   px-6 py-2 bg-gradient-to-tr from-blue-400 to-green-600 rounded-full"
          >
            Know me better
          </a>
        </div>
      </div>
      <img
        src={coding}
        className="w-full lg:w-1/2 lg:absolute lg:right-[-20px] lg:top-[150px] transition-transform duration-300 group-hover:-translate-y-2 lg:group-hover:-translate-x-2"
        alt=""
      />
    </section>
  );
};

export default Presentation;
