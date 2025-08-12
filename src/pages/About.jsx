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
    position: "Store Person",
    location: "Perth, Australia",
    period: "Feb 2022 - Dec 2024",
    url: "https://www.metcash.com/",
    responsibilities: [
      "Managed inventory operations and quality control while optimizing warehouse processes for distribution centers",
    ],
  },
  {
    company: "Selise Digital Platforms",
    position: "Software Engineer (UI)",
    location: "Thimphu, Bhutan",
    period: "February 2021 - October 2022",
    url: "https://selisegroup.com",
    responsibilities: [
      "Built responsive UIs with React/TypeScript/Tailwind CSS, developed reusable component library, and mentored junior developers while improving performance by 20-30%",
    ],
  },
  {
    company: "Select Software Pty Ltd",
    position: "Software Developer",
    location: "Thimphu, Bhutan",
    period: "January 2016 - January 2021",
    url: "https://multirational.bt",
    responsibilities: [
      "Maintained C# .NET modules for Selcomm billing platform, executed comprehensive QA testing, and contributed to technical documentation",
    ],
  },
  {
    company: "Athang ICT",
    position: "Technical Training Program",
    location: "Thimphu, Bhutan",
    period: "May 2014 - December 2014",
    url: "https://www.athang.com",
    responsibilities: [
      "Completed intensive 6-month training in software development, mobile apps, network infrastructure, and created working prototypes",
    ],
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
            I'm a passionate frontend engineer who transforms complex ideas into 
            intuitive digital experiences. With over 8 years in the tech industry, 
            I've mastered the art of bridging design and functionality, creating 
            solutions that users love and businesses rely on.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            custom={0.1}
          >
            My journey spans from developing C# .NET billing systems and ensuring 
            enterprise-grade reliability to crafting modern React applications 
            that deliver measurable performance improvements and drive user engagement.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            custom={0.2}
          >
            I thrive in collaborative environments where innovation meets precision. 
            Whether mentoring teams, optimizing performance, or solving complex 
            technical challenges, I bring both technical excellence and creative 
            problem-solving to every project.
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
