// src/pages/About.jsx
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExperienceTimeline } from "../features/about/ExperienceTimeline";

// Animation variants
const fadeInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: (delay = 0) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay },
  }),
};

const fadeInRight = {
  hidden: { x: 50, opacity: 0, rotate: 8 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 4,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 },
  },
};

const growLine = {
  hidden: { height: 0, opacity: 0 },
  visible: (delay = 0) => ({
    height: "100%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay },
  }),
};

// Work Experience Data
const workExperience = [
  {
    company: "Metcash Trading Ltd",
    position: "Inventory Receiver",
    location: "Perth, Australia",
    period: "Feb 2022 - Till Date",
    url: "https://www.metcash.com/",
  },
  {
    company: "Selise Digital Platforms",
    position: "Software Engineer(UI)",
    location: "Thimphu, Bhutan",
    period: "Feb 2021 - Oct 2022",
    url: "https://selisegroup.com",
  },
  {
    company: "Multirational Pty Ltd",
    position: "Software Developer",
    location: "Thimphu, Bhutan",
    period: "Jan 2016 - Jan 2021",
    url: "https://multirational.bt",
  },
  {
    company: "Athang ICT",
    position: "Software Developer Internship",
    location: "Thimphu, Bhutan",
    period: "July 2015 - Nov 2015",
    url: "https://www.athang.com",
  },
];

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-11">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { y: -50, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        className="font-bebas text-6xl tracking-wide mb-5"
      >
        About
      </motion.h1>

      <div className="flex flex-col md:flex-row items-start gap-11 md:gap-8">
        <div className="max-w-lg text-base text-dark-400 space-y-6">
          <motion.p initial="hidden" animate="visible" variants={fadeInLeft}>
            I began my career as a Software Developer Intern at Athang ICT, then
            spent five years as a QA Engineer collaborating directly with Select
            Software Pty Ltd, where I developed expertise in software quality
            assurance and built advanced test automation frameworks.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            custom={0.1}
          >
            Later, as a UI Engineer at Selise Digital Platforms, I developed
            responsive user interfaces for various projects while collaborating
            with cross-functional teams.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            custom={0.2}
          >
            Throughout my career, I've gained extensive experience in software
            development lifecycle, from concept to deployment, working closely
            with designers, developers, and project managers to deliver
            high-quality solutions
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
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
        <ExperienceTimeline experiences={workExperience} />
      </div>
    </div>
  );
};

export default About;
