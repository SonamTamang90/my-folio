import Navigation from "../ui/Navigation";
import Socials from "../ui/Socials";
import Logo from "../ui/Logo";
import { HiMiniXMark } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";

export const MobileSidebar = ({ isMobile, setIsMobile }) => {
  const handleClick = () => {
    setIsMobile(false);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },

    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Overlay animation variants
  const overlayVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      {/* Animated Overlay */}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={handleClick}
            className="fixed inset-0 bg-dark-900 bg-opacity-70 z-40 blur-md"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMobile && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed block md:hidden w-[240px] dark:bg-dark-700 z-50 h-full border-r border-dark-300 transform 
        "
          >
            <button
              onClick={handleClick}
              className="absolute top-2 right-4 hover:bg-dark-200/60 bg-dark-300 border border-dark-100 rounded-full p-1"
            >
              <HiMiniXMark size={18} />
            </button>
            <div className="p-4 flex flex-col">
              <Logo />
              <div className="mt-6 mb-11">
                <Navigation setIsMobile={setIsMobile} />
              </div>
              <Socials />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside
      className={`fixed dark:bg-dark-700 w-[240px] h-full border-r border-dark-300 hidden lg:block`}
    >
      <div className="p-4 flex flex-col">
        <Logo />
        <div className="mt-6 mb-11">
          <Navigation />
        </div>
        <Socials />
      </div>
    </aside>
  );
};

export default Sidebar;
