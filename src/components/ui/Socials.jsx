import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/SonamTamang90",
    icon: FaXTwitter,
  },
  {
    label: "Github",
    href: "https://github.com/SonamTamang90",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sonamtamang1/",
    icon: FaLinkedin,
  },
];

const Socials = () => {
  return (
    <div className="px-4">
      <h4 className="text-xs text-dark-400 uppercase mb-6">Connect</h4>
      <div className="space-y-5">
        {socials.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            target="_blank"
            to={href}
            className="flex items-center gap-2 text-dark-400 transition-colors hover:text-white"
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
