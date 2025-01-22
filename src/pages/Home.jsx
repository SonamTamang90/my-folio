import { HiOutlineArrowUpRight } from "react-icons/hi2";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const OPTIONS = { dragFree: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const technologies = [
    { name: "HTML", level: "Proficient", icon: "/html.svg" },
    { name: "CSS", level: "Proficient", icon: "/css.svg" },
    { name: "Tailwind CSS", level: "Proficient", icon: "/tailwindcss.svg" },
    { name: "Sass", level: "Proficient", icon: "/sass.svg" },
    { name: "Javascript", level: "Proficient", icon: "/javascript.svg" },
    { name: "React", level: "Proficient", icon: "/react.svg" },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div className="">
      <div className="max-w-5xl mx-auto lg:py-20 lg:px-11">
        <section className="">
          <div className="">
            <h1 className="font-bebas lg:text-7xl tracking-wider space-y-3 mb-5">
              <span className="block">Hey, I'm Sonam</span>
              <span className="block">Frontend Developer</span>
            </h1>
            <p className="max-w-xl text-sm font-semibold uppercase tracking-wider text-dark-100">
              Transforming complex ideas into seamless digital experiences
              through innovative frontend solutions
            </p>
          </div>
          <div className="mt-12">
            <Link
              to="/projects"
              className="bg-[#242424] uppercase font-bebas text-xl tracking-wider text-white py-2.5 px-6 border border-dark-200 rounded-md"
            >
              <span>About</span>
              <HiOutlineArrowUpRight size={15} className="inline-block ml-2" />
            </Link>
          </div>
        </section>
        <section className="py-24">
          <div className="mb-8">
            <h2 className="font-bebas text-4xl tracking-wider mb-3 relative">
              <span className="relative z-10">Selected Project</span>
              <span className="inline-block w-11 h-11 bg-[#EF6848]/90 rounded-full absolute -top-1.5 -left-3 "></span>
            </h2>
            <p className="max-w-md text-dark-100">
              Explore a curated collection of my most impactful and innovative
              projects.
            </p>
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
        <section>
          <div className="mb-8">
            <h2 className="font-bebas text-4xl tracking-wider mb-3 relative">
              <span className="relative z-10">Stack</span>
              <span className="inline-block w-11 h-11 bg-orange-500/90 rounded-full absolute -top-1.5 -left-3"></span>
            </h2>
            <p className="max-w-md text-dark-100">
              Tools and technologies I use on regular basis to build modern
              websites and applications.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {technologies.slice(0, 6).map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3"
              >
                <div className="bg-dark-800 border border-dark-200 inline-block p-2 rounded-md">
                  <img src={tech.icon} alt={tech.name} width={20} height={20} />
                </div>
                <h4 className="text-sm uppercase flex flex-col">
                  <span>{tech.name}</span>
                  <span className="text-[10px] text-dark-100">
                    {tech.level}
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/projects"
              className="bg-[#242424] uppercase font-bebas text-xl tracking-wider text-white py-2.5 px-6 border border-dark-200 rounded-md"
            >
              <span>View All</span>
              <HiOutlineArrowUpRight size={15} className="inline-block ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
