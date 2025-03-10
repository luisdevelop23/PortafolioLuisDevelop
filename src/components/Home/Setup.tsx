import setup from "../../assets/escritorio.jpg";
import VscodeIcon from "../../assets/icons/VscodeIcon";
const Setup = () => {
  return (
    <a
      target="_blank"
      className="col-span-6 lg:col-span-4"
      href="https://www.instagram.com/luis_saavedraf/"
    >
      <section className="group relative flex min-h-[20rem] transform-gpu cursor-pointer grid-cols-4 flex-col justify-between gap-5 overflow-hidden rounded-[20px] bg-[#ffa32a75] p-5 transition-all duration-300 will-change-transform hover:scale-[1.02] hover:bg-[#ffa32aa9] md:h-[30rem] md:rounded-[40px] md:p-10 lg:flex-col lg:gap-10 lg:hover:scale-105">
        <div className="flex h-25 w-full items-center">
          <div className="-top-20 left-70 w-4/12">
            <VscodeIcon className="h-15 w-20 md:h-25 md:w-25" />
          </div>
          <h1 className="AcornSemiBold w-full text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem]">
            My workspace: where I create applications and enjoy the
            process.{" "}
          </h1>
        </div>
        <img
          src={setup}
          alt=""
          className="w-full rounded-2xl transition-all duration-300 group-[&:hover]:-mt-3 group-[&:hover]:scale-[1.04]"
        />
      </section>
    </a>
  );
};

export default Setup;
