import projectsList from "../../data/projesctsList";
const Projects = () => {
  const projects = projectsList;
  return (
    <section id="projects">
      <h1 className="text-[2rem] font-semibold text-[#0082C4] md:text-[3.3rem] lg:text-[5rem] AcornBold text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <a href={project?.url || project?.github || ""} target="_blank">
            <div
              key={project.id}
              className="group flex flex-col justify-start items-center p-5 text-left   bg-[#ffffff85]  rounded-2xl  relative overflow-hidden min-h-[18rem] md:min-h-[18rem] lg:h-[20rem] transition-all duration-300 hover:bg-[#ffffff] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer"
            >
              <h1 className="text-[#0083C4] text-[1.4rem] sm:text-[1.25rem] md:text-[1.5rem] font-bold ">
                {project.title.en}
              </h1>
              <p className="text-[1rem] sm:text-[0.8rem] md:text-[1rem]">{project.description.en}</p>
              <img
                src={project.image}
                alt={project.title.en}
                className=" w-10/12 lg:w-10/12 absolute  bottom-[-20px] lg:bottom-[-18px] rounded-xl transition-transform duration-300 group-hover:-translate-y-2 lg:group-hover:-translate-x-2"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
