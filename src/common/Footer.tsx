import GithubIcon from "../assets/icons/GithubIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import YouTubeIcon from "../assets/icons/YoutubeIcon";

const Footer = () => {
  return (
    <footer className="relative mx-auto mt-10 mb-[50px] flex max-w-[1200px] flex-col items-center gap-10 px-4 sm:px-6 md:mt-20 md:mb-[100px] md:px-8">
      <div className="flex w-full flex-col items-center justify-between p-2 backdrop-blur-md">
        <div className="py-7">
          <h1 className="AcornBold text-[2rem] font-semibold text-[#0082C4] md:text-[3rem]">
            Created by luis saavedra
          </h1>
        </div>
        <div className="flex w-full items-center justify-around text-[2rem] md:text-[4rem]">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/luisdevelop23/"
          >
            <LinkedInIcon />
          </a>
          <a target="_blank" href="https://github.com/luisdevelop23">
            <GithubIcon />
          </a>
          <a target="_blank" href="https://www.youtube.com/@LuisDevelop23">
            <YouTubeIcon />
          </a>
          <a target="_blank" href="https://www.instagram.com/luis_saavedraf/">
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            className="AcornSemiBold font-semibold text-[#0082C4]"
            href="https://drive.google.com/file/d/1xHtVPXZKGIgpv8RD6lZw1BZ346NgMfus/view"
          >
            <p>cv</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

// https://drive.google.com/file/d/1xHtVPXZKGIgpv8RD6lZw1BZ346NgMfus/view?usp=sharing
export default Footer;
