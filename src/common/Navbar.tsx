function NavBar() {
  const scrollToSection = (id: string, offset = -100) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop - offset; // Ajusta la posición más arriba
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-28 flex items-center justify-center sticky top-0 z-50">
      <div className="flex justify-between p-2 backdrop-blur-md bg-white/50 rounded-full lg:w-[500px]">
        <a
          className="text-green-400 font-semibold text-xl px-6 py-2 bg-zinc-600 rounded-full cursor-pointer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("work", 100); 
          }}
        >
          Work
        </a>

        <a
          className="text-green-400 font-semibold text-xl px-6 py-2 bg-zinc-600 rounded-full cursor-pointer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          Projects
        </a>
        <a
          className="text-green-400 font-semibold text-xl px-6 py-2 bg-zinc-600 rounded-full cursor-pointer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
        <a
          className="text-green-400 font-semibold text-xl px-6 py-2 bg-zinc-600 rounded-full cursor-pointer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
