import kasuma from "../../assets/kasuma.png";
const AboutStudies = () => {
  return (
    <div className="relative w-full col-span-2 row-span-3 col-start-1 row-start-4 gap-10 bg-[#ffffff85] rounded-2xl px-5 pt-5 overflow-hidden">
      <h1 className="md:text-[2rem] text-[2rem] sm:text-[3.5rem] font-semibold AcornBold text-zinc-900">
        Studies
      </h1>
      <p className="md:text-[1.2rem] text-[1.2rem] sm:text-[1.5rem] font-semibold text-zinc-700">
        I am a student at the San Ignacio de Loyola Institute, I am studying
        software development.
      </p>
      <div className="w-full relative">
        <img src={kasuma} className="w-25 absolute right-0 top-0" alt="" />
      </div>
    </div>
  );
};

export default AboutStudies;
