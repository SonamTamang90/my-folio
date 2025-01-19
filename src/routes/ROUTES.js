import {
  HiOutlineComputerDesktop,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineSquare3Stack3D,
  HiOutlineUser,
} from "react-icons/hi2";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECT: "/project",
  STACK: "/stack",
  CONTACT: "/contact",
};

export const NAV_MENU = [
  {
    label: "Home",
    href: ROUTES.HOME,
    icon: HiOutlineHome,
  },
  {
    label: "About",
    href: ROUTES.ABOUT,
    icon: HiOutlineUser,
  },
  {
    label: "Project",
    href: ROUTES.PROJECT,
    icon: HiOutlineComputerDesktop,
  },
  {
    label: "Stack",
    href: ROUTES.STACK,
    icon: HiOutlineSquare3Stack3D,
  },
  {
    label: "Contact",
    href: ROUTES.CONTACT,
    icon: HiOutlineEnvelope,
  },
];
