import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/dev.png" alt="Sonam Tamang" className="h-10 rounded-full" />
      <h4>
        <span className="block">Sonam Tamang</span>
        <span className="block text-dark-400">UI Engineer</span>
      </h4>
    </Link>
  );
};

export default Logo;
