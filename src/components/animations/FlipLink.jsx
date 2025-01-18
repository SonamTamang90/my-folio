import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const DURATION = 0.25;
const STAGGER = 0.025;

const MotionNavLink = motion(NavLink);

const FlipLink = ({ children, href }) => {
  return (
    <MotionNavLink
      initial="initial"
      whileHover="hovered"
      to={href}
      className="relative inline-block overflow-hidden whitespace-nowrap font-bebas text-4xl uppercase lg:text-8xl"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-dark-300"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </MotionNavLink>
  );
};

export default FlipLink;
