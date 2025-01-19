import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Navigation from "./Navigation";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Connect from "./Connect";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 bg-dark-800 h-full">
      <div className="w-64 py-6 px-5">
        {/* Logo goes here */}
        <Link to="/">
          <img src="/logo.png" alt="brand logo" width={140} height={140} />
        </Link>

        {/* Main menu links */}
        <Navigation />

        {/* Social links */}
        <Connect />
      </div>
    </aside>
  );
};

export default Sidebar;
