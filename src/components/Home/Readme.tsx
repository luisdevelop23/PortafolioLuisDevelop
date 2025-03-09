import { Link } from "react-router-dom";
import DevIcon from "../../assets/icons/DevIcon";
import RightIcon from "../../assets/icons/RightIcon";

const Readme = () => {
  return (
    <section className="w-8/12 ">
      <Link
        to="/about"
        className="group flex flex-col   gap-5 lg:gap-10 bg-[#05fa6b8a] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] transition-all duration-300 hover:bg-[#05fa6bc0]  transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer   "
      >
        <div className=" flex  items-center  h-25 ">
          <h1 className="w-full text-[1.8rem] AcornSemiBold  ">
            Learn more about me and what I do
          </h1>
          <div className="h-full flex items-center ">
            <RightIcon className="md:h-12 md:w-12 h-15 w-30  " />
          </div>
        </div>
        <div className="w-full flex flex-col items-center ">
          <DevIcon className="md:h-96 md:w-96 h-15 w-30 -mt-10  group-[&:hover]:scale-[1.04]   group-[&:hover]:-mt-13 transition-all duration-300" />
        </div>
      </Link>
    </section>
  );
};


export default Readme;
