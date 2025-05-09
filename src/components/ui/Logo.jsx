import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/images/me.webp"
        alt="Sonam Tamang"
        className="h-10 rounded-full"
      />
      <h4>
        <span className="block">Sonam Tamang</span>
        <span className="block text-dark-400">Frontend Developer</span>
      </h4>
    </Link>
  );
};

export default Logo;
