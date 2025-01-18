import { Link } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { useState } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(true);
  };
  return (
    <header className="h-20">
      <div className="max-w-7xl mx-auto h-full lg:px-24">
        <div className="h-full flex items-center justify-between">
          <Link to="/">
            <img src="/logo.png" alt="folio logo" className="h-8" />
          </Link>
          {isMenuOpen && <Navigation onIsMenuOpen={setIsMenuOpen} />}
          <button
            onClick={handleClick}
            className="flex items-center gap-1 uppercase transition-colors duration-300 hover:text-dark-300"
          >
            <span>Menu</span>
            <HiOutlineBars2 size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
