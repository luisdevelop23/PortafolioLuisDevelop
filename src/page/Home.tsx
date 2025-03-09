import JsIcon from "../assets/icons/JsIcon";
import LogosNodejs from "../assets/icons/LogosNodejs";
import MongoDBIcon from "../assets/icons/MongoDBIcon";
import MySQLIcon from "../assets/icons/MySQLIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import TsIcon from "../assets/icons/TsIcon";
import Projects from "../components/Home/Projects";
import Work from "../components/Home/Work";

const Home = () => {
  return (
    <section className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto mt-10 md:mt-10 relative mb-[50px] md:mb-[100px] px-4 sm:px-6 md:px-8">
      <Work />
      <Projects />
      <div className="absolute rotate-12 -top-5 right-2 animate-float">
        <JsIcon className="md:h-30 md:w-30 h-15 w-30  " />
      </div>
      <div className="absolute -rotate-12 -top-4 left-0 animate-float">
        <TsIcon className="md:h-30 md:w-30 h-15 w-30 " />
      </div>
      <div className="absolute rotate-12 top-35 left-15 animate-float">
        <ReactIcon className="md:h-30 md:w-30 h-15 w-30  " />
      </div>
      <div className="absolute rotate-12 top-35 right-15 animate-float">
        <LogosNodejs className="md:h-35 md:w-35 h-15 w-30  " />
      </div>
      <div className="absolute -rotate-45 -top-20 right-60 animate-float">
        <MySQLIcon className="md:h-30 md:w-30 h-15 w-30  " />
      </div>
      <div className="absolute -rotate-45 -top-20 left-70 animate-float">
        <MongoDBIcon className="md:h-30 md:w-30 h-15 w-30  " />
      </div>
    </section>
  );
};

export default Home;
