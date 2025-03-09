import React from "react";
import VscodeIcon from "../../assets/icons/VscodeIcon";
import setup from "../../assets/escritorio.jpg";
const Setup = () => {
  return (
    <a target="_blank" href="https://www.instagram.com/luis_saavedraf/">
      <section className="group flex flex-col lg:flex-col gap-5 lg:gap-10 bg-[#ffa32a75] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] transition-all duration-300 hover:bg-[#ffa32aa9] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer w-full ">
        <div className="w-full flex  items-center  h-25 ">
          <div className=" w-4/12  -top-20 left-70 ">
            <VscodeIcon className="md:h-25 md:w-25 h-15 w-30  " />
          </div>
          <h1 className="w-full text-[1.8rem] AcornSemiBold  ">
            My workspace: where I create applications and enjoy the process.{" "}
          </h1>
        </div>
        <img
          src={setup}
          alt=""
          className="w-full rounded-2xl  group-[&:hover]:scale-[1.04] group-[&:hover]:-mt-3 transition-all duration-300"
        />
      </section>
    </a>
  );
};

export default Setup;
