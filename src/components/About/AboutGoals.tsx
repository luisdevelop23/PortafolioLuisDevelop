import takumi from "../../assets/takumi.png";

const AboutGoals = () => {
  return (
    <div className="relative col-span-1 row-span-1 gap-10 overflow-hidden rounded-2xl bg-[#ffffff85] px-5 pt-5 md:col-span-3 md:col-start-4 md:row-span-3 md:row-start-4 lg:col-span-2 lg:col-start-3 lg:row-span-3 lg:row-start-4">
      <h1 className="AcornBold text-[2rem] font-semibold text-zinc-900 sm:text-[3.5rem] md:text-[2rem]">
        My Goals
      </h1>
      <p className="text-[1.2rem] font-semibold text-zinc-700 sm:text-[1.5rem] md:text-[1.2rem]">
        My goal is to become someone influential in this world where technology
        revolutionizes people's lives, to create something that people remember
        forever.
      </p>
      <div className="relative w-full">
        <img
          src={takumi}
          className="absolute -top-7 right-0 w-25 md:top-0 md:w-30 lg:top-0 lg:w-38"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutGoals;
