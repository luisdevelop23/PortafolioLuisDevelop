
const AboutReadme = () => {
  return (
    <div className="w-[800px]">
      <h1 className="text-4xl font-bold text-zinc-900 mb-5 AcornBold">
        Experience
      </h1>

      <h3 className="md:text-[1.3rem] text-[1.5rem] font-semibold text-[#0082C4]">
        Since I was little, I was curious about technology—how downloading
        pirated games made me feel like a hacker 😂, how taking apart my tablet
        at 10 years old ruined it, how subway systems predicted arrival times,
        and how a computer could give me access to everything just by using
        Google. These experiences pulled me into the world of technology and,
        little by little, into software development.
      </h3>

      <h3 className="md:text-[1.3rem] text-[1.5rem] font-semibold text-[#0082C4] mt-5">
        Before becoming a programmer, I worked in various jobs: at a hotel, in a
        frozen fruit processing plant, cleaning heavy machinery, as a store
        cashier, and even as a store manager. Despite those jobs, I kept pushing
        forward in learning development. The journey is tough, but the view and
        the goal make it all worth it.
      </h3>

      {/* Work Experience Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3 AcornBold">
          Work Experience
        </h2>

        <div className="bg-[#ffffff85] shadow-md p-5 rounded-lg">
          <h3 className="text-2xl font-semibold text-[#0082C4]">
            Full Stack Developer - ISEDA S.A.C
          </h3>
          <ul className="list-disc list-inside mt-3 text-[1.2rem] text-zinc-700">
            <li>
              Developed web applications using <b>React</b> and{" "}
              <b>TypeScript</b>, ensuring dynamic and responsive user
              interfaces.
            </li>
            <li>
              Implemented backend solutions with <b>Node.js</b> and{" "}
              <b>TypeScript</b>, using <b>JWT authentication</b> for security.
            </li>
            <li>
              Optimized backend-to-frontend integration, improving data flow and
              application functionality.
            </li>
            <li>
              Worked with <b>Prisma ORM</b> for backend development in{" "}
              <b>Node.js</b>.
            </li>
            <li>
              Styled interfaces using <b>TailwindCSS</b> and <b>CSS</b>,
              applying best practices for responsive design.
            </li>
            <li>
              Implemented efficient data handling with <b>StackQuery</b> and{" "}
              <b>React Query</b> to enhance performance and user experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutReadme;
