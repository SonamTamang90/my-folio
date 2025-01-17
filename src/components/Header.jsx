import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-14">
      <div className="max-w-7xl mx-auto h-full lg:px-24">
        <div className="h-full flex items-center justify-between">
          <div className="">
            <Link to="/">
              <img src="/logo.png" alt="folio logo" className="" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
