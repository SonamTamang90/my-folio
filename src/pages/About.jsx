import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const experience = [
  {
    id: 1,
    name: "Selise Digital Platforms",
    role: "UI Engineer",
    startYear: "2021",
    endYear: "2022",
  },
  {
    id: 2,
    name: "Select Software Pty Ltd",
    role: "QA Tester",
    startYear: "2016",
    endYear: "2020",
  },
  {
    id: 3,
    name: "Athang ICT",
    role: "Software Developer Internship",
    startYear: "2014",
    endYear: "2015",
  },
];

const About = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-11">
        <h1 className="font-bebas text-6xl tracking-wide mb-5">About</h1>
        <div className="flex flex-col md:flex-row items-start gap-11 md:gap-8">
          <div className="max-w-lg text-base dark:text-dark-400 space-y-6">
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
              I'm passionate about writing clean, efficient code and
              continuously learning to staty updated with the latest web
              technologies.
            </p>
          </div>
          <div className="w-[280px] h-[280px] overflow-hidden rounded-md rotate-3 ">
            <img
              src="./images/me.png"
              alt="Sonam Tamang"
              className="w-full grayscale"
            />
          </div>
        </div>

        <div className="mt-20 pb-20">
          <h2 className="font-bebas text-xl tracking-wider mb-8">
            Work Experience
          </h2>
          <div className="bg-dashed p-6 border dark:border-dark-300">
            <ul className="max-w-lg space-y-6">
              <li className="relative flex gap-x-4">
                <div className="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
                  <div className="w-px bg-dark-400"></div>
                </div>
                <div className="relative flex size-6 flex-none items-center justify-center bg-dark-700">
                  <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <div className="flex-auto py-0.5 text-sm text-dark-400">
                  <Link
                    to="https://selisegroup.com"
                    target="_blank"
                    className="flex items-start gap-1 group transition-colors duration-300 hover:text-white"
                  >
                    <p>
                      <span className="block">Selise Digital Platforms</span>
                      <span className="block">UI Engineer</span>
                    </p>
                    <HiArrowUpRight
                      size={12}
                      className="transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                    />
                  </Link>
                </div>
                <time className="flex-none py-0.5 text-sm text-dark-400">
                  Feb 2021 - Oct 2022
                </time>
              </li>
              <li className="relative flex gap-x-4 py-11">
                <div className="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
                  <div className="w-px bg-dark-400"></div>
                </div>
                <div className="relative flex size-6 flex-none items-center justify-center bg-dark-700">
                  <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <div className="flex-auto py-0.5 text-sm text-dark-400">
                  <Link
                    to="https://telcobilling.selcomm.net"
                    target="_blank"
                    className="flex items-start gap-1 group transition-colors duration-300 hover:text-white"
                  >
                    <p>
                      <span className="block">Select Software Pty Ltd</span>
                      <span className="block">QA Tester</span>
                    </p>
                    <HiArrowUpRight
                      size={12}
                      className="transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                    />
                  </Link>
                </div>
                <time className="flex-none py-0.5 text-sm text-dark-400">
                  Feb 2016 - Dec 2020
                </time>
              </li>
              <li className="relative flex gap-x-4">
                <div className="relative flex size-6 flex-none items-center justify-center bg-dark-700">
                  <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <div className="flex-auto py-0.5 text-sm text-dark-400">
                  <Link
                    to="https://www.athang.com"
                    target="_blank"
                    className="flex items-start gap-1 group transition-colors duration-300 hover:text-white"
                  >
                    <p>
                      <span className="block">Athang ICT</span>
                      <span className="block">
                        Software Developer Internship
                      </span>
                    </p>
                    <HiArrowUpRight
                      size={12}
                      className="transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                    />
                  </Link>
                </div>
                <time className="flex-none py-0.5 text-sm text-dark-400">
                  May 2014 - Jan 2015
                </time>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
