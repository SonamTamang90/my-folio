import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const socials = [
  {
    label: "Twitter",
    icon: FaXTwitter,
    href: "#",
    color: "#EF6848",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "#",
    color: "#67E7D8",
  },
  {
    label: "Github",
    icon: FaGithub,
    href: "#",
    color: "#F5C311",
  },
];

const Connect = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="mt-11">
      <h5 className="text-xs text-dark-100 uppercase mb-5">Connect</h5>
      <ul className="flex flex-col gap-5">
        {socials.map(({ label, icon: Icon, href, color }) => (
          <Link
            key={label}
            to={href}
            target="_blank"
            className="flex items-center justify-between text-dark-100 transition-colors duration-300 hover:text-white text-sm relative"
            onMouseEnter={() => setHoveredItem(label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-2">
              <Icon size={18} />
              <span>{label}</span>
            </div>
            <AnimatePresence>
              {hoveredItem === label && (
                <motion.div
                  className="bg-dark-900 p-1 rounded-sm"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  <HiOutlineArrowUpRight size={12} color={color} />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Connect;
