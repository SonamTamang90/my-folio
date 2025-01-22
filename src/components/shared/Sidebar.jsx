import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Connect from "./Connect";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 bg-dark-800 border-r border-dark-200 h-full z-50">
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
