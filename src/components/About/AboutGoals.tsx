import takumi from "../../assets/takumi.png";

const AboutGoals = () => {
  return (
    <div className="relative w-full col-span-2 row-span-3 col-start-3 row-start-4 gap-10 bg-[#ffffff85] rounded-2xl px-5 pt-5 overflow-hidden">
      <h1 className="md:text-[2rem] text-[2rem] sm:text-[3.5rem] font-semibold AcornBold text-zinc-900">
        My Goals
      </h1>
      <p className="md:text-[1.2rem] text-[1.2rem] sm:text-[1.5rem] font-semibold text-zinc-700">
        My goal is to become someone influential in this world where technology
        revolutionizes people's lives, to create something that people remember
        forever.
      </p>
      <div className="w-full relative">
        <img src={takumi} className="w-38 absolute right-0 top-0 " alt="" />
      </div>
    </div>
  );
};

export default AboutGoals;
