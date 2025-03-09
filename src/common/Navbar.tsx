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
    <div className="w-full h-28 flex items-center justify-center sticky top-0 z-50">
      <div className="flex justify-between p-2 backdrop-blur-md bg-white/50 rounded-full lg:w-[500px]">
        <a
          className={`text-[#0082C4]  text-xl px-6 py-2 rounded-full cursor-pointer  ${
            activeSection === "work" && location.pathname === "/"
              ? "bg-white font-semibold "
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
          className={`text-[#0082C4]  text-xl px-6 py-2 rounded-full cursor-pointer ${
            activeSection === "projects" && location.pathname === "/"
              ? "bg-white font-semibold "
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
          className={`text-[#0082C4]  transition-all duration-300 text-xl px-6 py-2 rounded-full cursor-pointer ${
            location.pathname === "/about"
              ? "bg-white font-semibold "
              : "hover:text-zinc-800"
          }`}
          to="/about"
        >
          About
        </Link>
        <a
          className="text-[#0082C4] hover:text-zinc-800 transition-all duration-300 text-xl px-6 py-2 rounded-full cursor-pointer"
          href="#"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
