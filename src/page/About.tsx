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
    <section className="relative mx-auto mt-10 mb-[50px] flex max-w-[1200px] flex-col items-center gap-10 px-4 sm:px-6 md:mt-10 md:mb-[100px] md:px-8">
      <AboutIm />
      <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-8">
        <AboutImage />
        <AboutMe />
      </div>
      <div className="grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-6 md:grid-rows-6 lg:grid-cols-6 lg:grid-rows-8">
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
