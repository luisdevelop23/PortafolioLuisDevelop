import kasuma from "../../assets/kasuma.png";
const AboutStudies = () => {
  return (
    <div className="relative col-span-1 row-span-1 gap-10 overflow-hidden rounded-2xl bg-[#ffffff85] px-5 pt-5 md:col-span-3 md:col-start-1 md:row-span-3 md:row-start-4 lg:col-span-2 lg:row-span-3 lg:row-start-4">
      <h1 className="AcornBold text-[2rem] font-semibold text-zinc-900 sm:text-[3.5rem] md:text-[2rem]">
        Studies
      </h1>
      <p className="text-[1.2rem] font-semibold text-zinc-700 sm:text-[1.5rem] md:text-[1.2rem]">
        I am a student at the San Ignacio de Loyola Institute, I am studying
        software development.
      </p>
      <div className="relative w-full">
        <img
          src={kasuma}
          className="absolute -top-5 right-0 w-17 md:top-0 md:right-0 md:w-22 lg:top-0 lg:right-0 lg:w-25"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutStudies;
