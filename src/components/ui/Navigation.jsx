import { FolderDot, Home, Laptop, Mail, User, PenSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: User,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderDot,
  },
  {
    label: "Stacks",
    href: "/stacks",
    icon: Laptop,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: PenSquare,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

const Navigation = ({ setIsMobile }) => {
  const { pathname } = useLocation();

  return (
    <nav className="relative">
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li
              key={label}
              className="relative"
              onClick={() => setIsMobile(false)}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-dark-200 border-dark-100 border rounded-md"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <Link
                to={href}
                className={`relative flex items-center gap-2 py-2.5 px-2 rounded-md z-10 ${
                  isActive
                    ? "text-white"
                    : "text-dark-400 hover:text-white transition-colors"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
