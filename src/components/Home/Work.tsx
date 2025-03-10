import Hi from "./Hi";
import Presentation from "./Presentation";
import Readme from "./Readme";
import Setup from "./Setup";

const Work = () => {
  return (
    <section id="work" className="pt-10">
      <Hi />
      <Presentation />
      <div className="grid w-full grid-cols-6 gap-10 pt-10">
        <Setup />
        <Readme />
      </div>
    </section>
  );
};

export default Work;
