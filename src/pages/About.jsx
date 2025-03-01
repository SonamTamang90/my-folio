import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-11">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font-bebas text-6xl tracking-wide mb-5"
        >
          About
        </motion.h1>
        <div className="flex flex-col md:flex-row items-start gap-11 md:gap-8">
          <div className="max-w-lg text-base text-dark-400 space-y-6">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              I began my career as a Software Developer Intern at Athang ICT,
              then spent five years as a QA Engineer collaborating directly with
              Select Software Pty Ltd, where I developed expertise in software
              quality assurance and built advanced test automation frameworks.
            </motion.p>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            >
              Later, as a UI Engineer at Selise Digital Platforms, I developed
              responsive user interfaces for various projects while
              collaborating with cross-functional teams.
            </motion.p>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            >
              Throughout my career, I've gained extensive experience in software
              development lifecycle, from concept to deployment, working closely
              with designers, developers, and project managers to deliver
              high-quality solutions
            </motion.p>
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0, rotate: 8 }}
            animate={{ x: 0, opacity: 1, rotate: 4 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="w-[280px] h-[280px] overflow-hidden rounded-md transform"
          >
            <img
              src="./images/me.webp"
              alt="Sonam Tamang"
              className="w-full grayscale"
            />
          </motion.div>
        </div>

        <div className="mt-20 pb-20">
          <h2 className="font-bebas text-xl tracking-wider mb-8">
            Work Experience
          </h2>
          <div className="bg-dashed py-6 px-3 md:p-6 border border-dark-300">
            <ul className="max-w-lg space-y-6">
              <li className="relative flex gap-x-4 pb-11">
                <div className="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "100%", opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-px bg-dark-400"
                  ></motion.div>
                </div>
                <div className="relative flex flex-wrap size-6 flex-none items-center justify-center bg-dark-700">
                  <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <div className="flex-auto py-0.5 text-sm">
                  <div className="space-y-1">
                    <Link
                      to="https://www.metcash.com/"
                      target="_blank"
                      className="flex items-start gap-1 group"
                    >
                      <span className="block text-nowrap">
                        Metcash Trading Ltd
                      </span>
                      <HiArrowUpRight
                        size={12}
                        className="transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                      />
                    </Link>
                    <p className="space-y-1 text-nowrap pb-2 md:pb-0  text-dark-400">
                      <span className="block">Store Person </span>
                      <spna>Perth, Australia</spna>
                    </p>
                    <time className="md:hidden flex-none py-0.5 text-sm text-dark-400">
                      Feb 2022 - Till Date
                    </time>
                  </div>
                </div>
                <time className="hidden md:block flex-none py-0.5 text-sm text-dark-400">
                  Feb 2022 - Till Date
                </time>
              </li>
              <li className="relative flex gap-x-4 pb-11">
                <div className="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "100%", opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                    className="w-px bg-dark-400"
                  ></motion.div>
                </div>
                <div className="relative flex size-6 flex-none items-center justify-center bg-dark-700">
                  <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <div className="flex-auto py-0.5 text-sm">
                  <div className="space-y-1">
                    <Link
                      to="https://selisegroup.com"
                      target="_blank"
                      className="flex items-start gap-1 group"
                    >
                      <span className="block text-nowrap">
                        Selise Digital Platforms
                      </span>
                      <HiArrowUpRight
                        size={12}
                        className="transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                      />
                    </Link>
                    <p className="space-y-1 text-dark-400 text-nowrap pb-2 md:pb-0">
                      <span className="block">UI Engineer</span>
                      <span>Thimphu, Bhutan</span>
                    </p>
                    <time className="flex-none py-0.5 text-sm text-dark-400">
                      Feb 2021 - Oct 2022
                    </time>
                  </div>
                </div>
                <time className="hidden md:block flex-none py-0.5 text-sm text-dark-400">
                  Feb 2021 - Oct 2022
                </time>
              </li>
              <li className="relative flex gap-x-4 pb-11">
                <div className="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "100%", opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.8,
                    }}
                    className="w-px bg-dark-400"
                  ></motion.div>
                </div>
                <div className="relative flex size-6 flex-none items-center justify-center bg-dark-700">
                  <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <div className="flex-auto py-0.5 text-sm">
                  <div className="space-y-1">
                    <Link
                      to="https://multirational.bt"
                      target="_blank"
                      className="flex items-start group gap-1"
                    >
                      <span className="block text-nowrap">
                        Multirational Pty Ltd
                      </span>
                      <HiArrowUpRight
                        size={12}
                        className="transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                      />
                    </Link>
                    <p className="space-y-1 text-dark-400 text-nowrap pb-2 md:pb-0">
                      <span className="block">QA Tester</span>
                      <span>Thimphu, Bhutan</span>
                    </p>
                    <time className="md:hidden flex-none py-0.5 text-sm text-dark-400">
                      Jan 2016 - Jan 2021
                    </time>
                  </div>
                </div>
                <time className="hidden md:block flex-none py-0.5 text-sm text-dark-400">
                  Jan 2016 - Jan 2021
                </time>
              </li>
              <li className="relative flex gap-x-4">
                <div className="relative flex size-6 flex-none items-center justify-center bg-dark-700">
                  <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <div className="flex-auto py-0.5 text-sm ">
                  <div className="space-y-1">
                    <Link
                      to="https://www.athang.com"
                      target="_blank"
                      className="flex items-start gap-1 group"
                    >
                      <span className="block text-nowrap">Athang ICT</span>
                      <HiArrowUpRight
                        size={12}
                        className="transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                      />
                    </Link>
                    <p className="space-y-1 text-dark-400 pb-2 md:pb-0 text-nowrap">
                      <span className="block">
                        Software Developer Internship
                      </span>
                      <span>Thimphu, Bhutan</span>
                    </p>
                    <time className="block md:hiddenflex-none py-0.5 text-sm text-dark-400">
                      July 2015 - Nov 2015
                    </time>
                  </div>
                </div>
                <time className="hidden md:block flex-none py-0.5 text-sm text-dark-400">
                  July 2015 - Nov 2015
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
