import Card from "../components/ui/Card";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import ShinyText from "../components/animations/ShinyText";

const Projects = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-11">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-bebas text-6xl tracking-wide mb-5"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-lg lg:text-lg text-dark-400"
        >
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mt-11">
          {projects &&
            projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                graphic={project.images}
                description={project.intro}
                status={project.status}
                slug={project.slug}
              />
            ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/sonamtamang90"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00796e] hover:bg-[#005a52] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <ShinyText text="Show More Projects" speed={3} />
            <HiArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
