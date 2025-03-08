import React from "react";
import projectsList from "../data/projesctsList";
const Projects = () => {
  const projects = projectsList;
  return (
    <section id="projects" >
      <h1 className="text-[5rem] py-15 font-semibold text-green-500 AcornBold text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div className="group flex flex-col justify-start items-center p-5 text-left   bg-[#ffffffd7]  rounded-2xl  relative overflow-hidden min-h-[10rem] md:h-[20rem] transition-all duration-300 hover:bg-[#ffffff] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer">
            <h1 className="text-3xl font-semibold text-green-500 ">
              {project.title.en}
            </h1>
            <p className="text-md">{project.description.en}</p>
            <img
              src={project.image}
              alt={project.title.en}
              className="w-full lg:w-10/12 lg:absolute  lg:bottom-[-18px] rounded-t-xl transition-transform duration-300 group-hover:-translate-y-2 lg:group-hover:-translate-x-2"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
