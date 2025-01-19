import { NavLink, useLocation } from "react-router-dom";
import { NAV_MENU } from "../../routes/routes";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="lg:mt-8">
      <ul className="space-y-2">
        {NAV_MENU.map(({ label, href, icon: Icon }) => (
          <li key={href}>
            <NavLink
              to={href}
              className={`flex items-center gap-2 transition-colors duration-300 text-sm tracking-wider px-2.5 py-2.5 rounded-md ${
                pathname === href
                  ? "bg-dark-400 text-white border border-dark-200"
                  : "text-dark-100 hover:text-white border border-transparent"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
