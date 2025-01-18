import { HiOutlineXMark } from "react-icons/hi2";
import { NAV_MENU } from "../routes/ROUTES";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import FlipLink from "./animations/FlipLink";

const Navigation = ({ onIsMenuOpen }) => {
  return (
    <div className="fixed top-0 inset-x-0 w-full min-h-full bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto py-11 lg:px-24 flex flex-col">
        <button
          className="bg-white rounded-full p-2 self-end"
          onClick={() => onIsMenuOpen(false)}
        >
          <HiOutlineXMark size={20} color="black" />
        </button>

        <nav className="py-24">
          <ul className="flex flex-col gap-6">
            {NAV_MENU.map((menu) => (
              <li key={menu.href}>
                <FlipLink href={menu.href}>{menu.label}</FlipLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
