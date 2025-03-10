import { Link } from "react-router-dom";
import DevIcon from "../../assets/icons/DevIcon";
import RightIcon from "../../assets/icons/RightIcon";

const Readme = () => {
  return (
    <section className="col-span-6 lg:col-span-2">
      <Link
        to="/about"
        className="group relative flex min-h-[20rem] transform-gpu cursor-pointer flex-col justify-between gap-5 overflow-hidden rounded-[20px] bg-[#05fa6b8a] p-5 transition-all duration-300 will-change-transform hover:scale-[1.02] hover:bg-[#05fa6bc0] md:h-[30rem] md:rounded-[40px] md:p-10 lg:gap-10 lg:hover:scale-105"
      >
        <div className="flex h-25 items-center">
          <h1 className="AcornSemiBold w-full text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem]">
            Learn more about me and what I do
          </h1>
          <div className="flex h-full items-center">
            <RightIcon className="h-15 w-30 md:h-12 md:w-12" />
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <DevIcon className="-mt-10 h-50 w-100 transition-all duration-300 group-[&:hover]:-mt-13 group-[&:hover]:scale-[1.04] md:h-96 md:w-96" />
        </div>
      </Link>
    </section>
  );
};

export default Readme;
