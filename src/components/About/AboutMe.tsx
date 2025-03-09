import React from "react";

const AboutMe = () => {
  return (
    <div className="col-span-5  pt-5 md:pt-10 rounded-[20px] md:rounded-[40px] flex flex-col justify-start ">
      <h1 className="text-[2.5rem] AcornSemiBold text-[#0082C4]">
        I am a fullstack developer based in Peru
      </h1>
      <p className="text-[1.2rem] pt-6 text-[#0082C4]">
        I am a Full Stack Developer specializing in web applications and
        microservices. I have experience working with libraries and frameworks
        such as React and Node.js, developing in both JavaScript and TypeScript.
      </p>
      <p className="text-[1.2rem] pt-6 text-[#0082C4]">
        While my current focus is on web development and API design, I am
        constantly expanding my knowledge, exploring fields like Machine
        Learning and future development with Python.
      </p>
    </div>
  );
};

export default AboutMe;
