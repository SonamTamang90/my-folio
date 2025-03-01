import { devTools, coreTech, libraries, backend, ai } from "../data/projects";
import { motion } from "framer-motion";

const Stack = ({ stack, index }) => {
  const { name, description, icon } = stack;
  return (
    <div className="flex items-center gap-2">
      <div className="h-12 w-12 flex items-center justify-center bg-dark-700 border border-dark-300 p-2 rounded-md shadow-sm">
        <img
          src={icon}
          alt={name}
          className={`${index === devTools.length - 1 ? "w-6 h-6" : ""} w-full`}
        />
      </div>
      <div className="text-dark-400">
        <h4>{name}</h4>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

const Stacks = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-11 pb-20">
        <div className="mb-11">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="font-bebas text-6xl tracking-wide mb-5"
          >
            Stacks
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-lg text-lg text-dark-400"
          >
            Essential tools and software that power my web development workflow,
            enabling me to build modern websites and applications efficiently.
            Always exploring new technologies to enhance productivity.
          </motion.p>
        </div>

        <div className="mb-11">
          <h2 className="font-bebas text-xl tracking-wider mb-8">
            Development Tools
          </h2>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-dashed border border-dark-300 rounded-md p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {devTools.map((tool, index) => (
                <Stack key={tool.id} stack={tool} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-11">
          <h2 className="font-bebas text-xl tracking-wider mb-8">
            Core Technologies
          </h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
            className="bg-dashed border border-dark-300 rounded-md p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {coreTech.map((tool) => (
                <Stack key={tool.id} stack={tool} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-11">
          <h2 className="font-bebas text-xl tracking-wider mb-8">
            Framework & Libraries
          </h2>
          <div className="bg-dashed border border-dark-300 rounded-md p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {libraries.map((tool) => (
                <Stack key={tool.id} stack={tool} />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-11">
          <h2 className="font-bebas text-xl tracking-wider mb-8">
            Backend & Database
          </h2>
          <div className="bg-dashed border border-dark-300 rounded-md p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {backend.map((tool) => (
                <Stack key={tool.id} stack={tool} />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-11">
          <h2 className="font-bebas text-xl tracking-wider mb-8">
            AI & Content Tools
          </h2>
          <div className="bg-dashed border border-dark-300 rounded-md p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ai.map((tool) => (
                <Stack key={tool.id} stack={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stacks;
