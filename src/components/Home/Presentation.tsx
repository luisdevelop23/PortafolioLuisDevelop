import coding from "../../assets/coding.webp";
const Presentation = () => {
  return (
    <section className="group relative flex min-h-[20rem] transform-gpu cursor-pointer flex-col justify-between gap-5 overflow-hidden rounded-[20px] bg-[#ffffffd7] p-5 transition-all duration-300 will-change-transform hover:scale-[1.02] hover:bg-[#ffffff] md:h-[30rem] md:rounded-[40px] md:p-10 lg:flex-row lg:gap-10 lg:hover:scale-105">
      <div className="flex w-full flex-col justify-between lg:w-1/2">
        <h1 className="AcornSemiBold text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem]">
          Efficiency and Quality is not an option, it is a necessity.
        </h1>
        <div className="text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem]">
          <p className="mt-1 text-left lg:mt-5">
            As a Full Stack developer, I specialize in creating efficient and
            optimized applications for the client, applying good development
            practices.
          </p>
          <p className="mt-1 text-left lg:mt-5">
            I prioritize scalability, writing clean and adaptable code,
            guaranteeing long-term sustainable solutions.
          </p>
        </div>
        <div className="mt-2 lg:mt-0">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/luissaavedradev/"
            className="rounded-full bg-gradient-to-tr from-blue-400 to-green-600 px-1 py-1 font-sans text-[0.9rem] font-bold text-zinc-800 md:px-6 md:py-2 lg:text-[1.2rem]"
          >
            Know me better
          </a>
        </div>
      </div>
      <img
        src={coding}
        className="w-full transition-transform duration-300 group-hover:-translate-y-2 lg:absolute lg:top-[150px] lg:right-[-20px] lg:w-1/2 lg:group-hover:-translate-x-2"
        alt=""
      />
    </section>
  );
};

export default Presentation;
