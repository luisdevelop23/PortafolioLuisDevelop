import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const [activeSection, setActiveSection] = useState<string>("work"); // Inicia en "Work"
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["work", "projects"];
      let currentSection = "work"; // Valor por defecto

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, offset = -100) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        smoothScroll(id, offset);
      }, 300); // Asegura que la navegación se complete antes de hacer scroll
    } else {
      smoothScroll(id, offset);
    }
  };

  const smoothScroll = (id: string, offset: number) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50 flex h-17 w-full items-center justify-center md:h-28">
      <div className="flex w-[300px] justify-between rounded-full bg-white/50 p-2 backdrop-blur-md md:w-[500px]">
        <a
          className={`cursor-pointer rounded-full px-3 py-2 text-[0.9rem] text-[#0082C4] md:px-6 md:py-2 md:text-[1.5rem] ${
            activeSection === "work" && location.pathname === "/"
              ? "bg-white font-semibold"
              : "hover:text-zinc-800"
          }`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("work", 100);
          }}
        >
          Work
        </a>

        <a
          className={`cursor-pointer rounded-full px-3 py-2 text-[0.9rem] text-[#0082C4] md:px-6 md:py-2 md:text-[1.5rem] ${
            activeSection === "projects" && location.pathname === "/"
              ? "bg-white font-semibold"
              : "hover:text-zinc-800"
          }`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          Projects
        </a>
        <Link
          className={`cursor-pointer rounded-full px-3 py-2 text-[0.9rem] text-[#0082C4] transition-all duration-300 md:px-6 md:py-2 md:text-[1.5rem] ${
            location.pathname === "/about"
              ? "bg-white font-semibold"
              : "hover:text-zinc-800"
          }`}
          to="/about"
        >
          About
        </Link>
        <a
          className="cursor-pointer rounded-full px-3 py-2 text-[0.9rem] text-[#0082C4] transition-all duration-300 hover:text-zinc-800 md:px-6 md:py-2 md:text-[1.5rem]"
          href="https://www.linkedin.com/in/luissaavedradev/"
          target="_blank"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
