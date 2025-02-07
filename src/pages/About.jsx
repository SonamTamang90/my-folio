import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto lg:px-11">
        <h1 className="font-bebas lg:text-6xl tracking-wide mb-5">About</h1>
        <div className="flex items-start gap-8">
          <div className="max-w-lg lg:text-base dark:text-dark-400 space-y-6">
            <p>
              Hi, I'm Sonam Tamang, I have 2+ years of experience in building
              websites and engaging, user-friendly user inteface.
            </p>
            <p>
              I specialize in HTML, CSS, Tailwind CSS and Javascript with
              growing expertise in React and Next Js with focus on developing
              responsive, accessible designs and enjoy collaborating with teams
              or individuals to bring ideas to life.
            </p>
            <p>
              I'm passionate about writing clearn, efficient code and
              continuously learning to staty updated with the latest web
              technologies.
            </p>
          </div>
          <div className="w-[280px] h-[280px] overflow-hidden rounded-md rotate-3 ">
            <img
              src="./me.png"
              alt="Sonam Tamang"
              className="w-full grayscale"
            />
          </div>
        </div>

        <div className="">
          <h2 className="font-bebas text-xl tracking-wider mb-8">
            Work Experience
          </h2>
          <div className="dark:text-dark-400">
            <Link className="flex items-center gap-2 mb-2">
              <span>Selise Digital Platforms</span>
              <HiArrowUpRight />
            </Link>
            <p className="flex items-center gap-4">
              <span>UI Engineer</span>
              <span>2021 - 2022</span>
            </p>
          </div>
          <div className="dark:text-dark-400 mt-6">
            <Link className="flex items-center gap-2 mb-2">
              <span>Select Software Pty Ltd</span>
              <HiArrowUpRight />
            </Link>
            <p className="flex items-center gap-4">
              <span>Developer</span>
              <span>2019 - 2021</span>
            </p>
          </div>
          <div className="dark:text-dark-400 mt-6">
            <Link className="flex items-center gap-2 mb-2">
              <span>Athang ICT</span>
              <HiArrowUpRight />
            </Link>
            <p className="flex items-center gap-4">
              <span>Software Developer(Intern)</span>
              <span>Feb 2018 - Aug 2018</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
