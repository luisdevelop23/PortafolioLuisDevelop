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
    <section className="relative mx-auto mb-[50px] flex max-w-[1200px] flex-col items-center gap-10 px-4 sm:px-6 md:mt-10 md:mb-[100px] md:px-8">
      <Work />
      <Projects />
      <div className="animate-float absolute top-1 right-5 rotate-12 md:top-1 md:right-5 lg:-top-5 lg:right-2">
        <JsIcon className="h-10 w-10 md:h-20 md:w-20 lg:h-30 lg:w-30" />
      </div>
      <div className="animate-float absolute top-1 left-5 -rotate-12 md:top-1 md:left-5 lg:-top-4 lg:left-0">
        <TsIcon className="h-10 w-10 md:h-20 md:w-20 lg:h-30 lg:w-30" />
      </div>
      <div className="animate-float absolute top-14 left-10 rotate-12 md:top-21 md:left-18 lg:top-35 lg:left-15">
        <ReactIcon className="h-10 w-10 md:h-20 md:w-20 lg:h-30 lg:w-30" />
      </div>
      <div className="animate-float absolute top-13 right-9 rotate-12 md:top-21 md:right-10 lg:top-35 lg:right-15">
        <LogosNodejs className="h-12 w-16 md:h-35 md:w-35" />
      </div>
      <div className="animate-float absolute -top-1 right-30 -rotate-45 md:-top-3 md:right-40 lg:-top-20 lg:right-60">
        <MySQLIcon className="h-10 w-10 md:h-20 md:w-20 lg:h-30 lg:w-30" />
      </div>
      <div className="animate-float absolute -top-1 left-30 -rotate-45 md:-top-4 md:left-40 lg:-top-20 lg:left-70">
        <MongoDBIcon className="h-10 w-10 md:h-20 md:w-20 lg:h-30 lg:w-30" />
      </div>
    </section>
  );
};

export default Home;
