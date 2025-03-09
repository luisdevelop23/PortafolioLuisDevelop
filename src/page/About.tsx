import { useEffect } from "react";
import AboutGoals from "../components/About/AboutGoals";
import AboutIm from "../components/About/AboutIm";
import AboutImage from "../components/About/AboutImage";
import AboutImprove from "../components/About/AboutImprove";
import AboutMe from "../components/About/AboutMe";
import AboutReadme from "../components/About/AboutReadme";
import AboutSkills from "../components/About/AboutSkills";
import AboutStudies from "../components/About/AboutStudies";

const About = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <section className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto mt-10 md:mt-10 relative mb-[50px] md:mb-[100px] px-4 sm:px-6 md:px-8">
      <AboutIm />
      <div className="w-full grid grid-cols-8 gap-20">
        <AboutImage />
        <AboutMe />
      </div>
      <div className="grid grid-cols-6 grid-rows-6 gap-4 w-full">
        <AboutSkills />
        <AboutStudies />
        <AboutGoals />
        <AboutImprove />
      </div>
        <AboutReadme />
    </section>
  );
};

export default About;
