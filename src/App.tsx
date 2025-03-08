import "./App.css";
import JsIcon from "./assets/icons/JsIcon";
import MongoDBIcon from "./assets/icons/MongoDBIcon";
import MySQLIcon from "./assets/icons/MySQLIcon";
import NodeIcon from "./assets/icons/NodeIcon";
import ReactIcon from "./assets/icons/ReactIcon";
import TsIcon from "./assets/icons/TsIcon";
import Footer from "./common/Footer";
import NavBar from "./common/Navbar";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Background />
      <NavBar />
      <main className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto mt-10 md:mt-20 relative mb-[50px] md:mb-[100px] px-4 sm:px-6 md:px-8">
        <Work />
        <Projects />
        <div className="absolute rotate-12 -top-5 right-0 animate-float">
          <JsIcon className="md:h-30 md:w-30 h-15 w-30  " />
        </div>
        <div className="absolute -rotate-12 -top-4 left-0 animate-float">
          <TsIcon className="md:h-30 md:w-30 h-15 w-30 " />
        </div>
        <div className="absolute rotate-12 top-35 left-15 animate-float">
          <ReactIcon className="md:h-30 md:w-30 h-15 w-30  " />
        </div>
        <div className="absolute rotate-12 top-35 right-15 animate-float">
          <NodeIcon className="md:h-30 md:w-30 h-15 w-30  " />
        </div>
        <div className="absolute -rotate-45 -top-20 right-60 animate-float">
          <MySQLIcon className="md:h-30 md:w-30 h-15 w-30  " />
        </div>
        <div className="absolute -rotate-45 -top-20 left-60 animate-float">
          <MongoDBIcon className="md:h-30 md:w-30 h-15 w-30  " />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
