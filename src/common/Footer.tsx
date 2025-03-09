import React from "react";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import YouTubeIcon from "../assets/icons/YoutubeIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto mt-10 md:mt-20 relative mb-[50px] md:mb-[100px] px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center  justify-between p-2 backdrop-blur-md w-full ">
        <div className="">
          <h1 className="text-[3rem] font-semibold text-[#0082C4] AcornBold">
            Created by luis saavedra
          </h1>
        </div>
        <div className="flex w-full justify-around">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/luissaavedradev/"
            className="text-[4rem] "
          >
            <LinkedInIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/luisdevelop23"
            className="text-[4rem] "
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@LuisDevelop23"
            className="text-[4rem] "
          >
            <YouTubeIcon />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/luis_saavedraf/"
            className="text-[4rem] "
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
