import Navigation from "../ui/Navigation";
import Socials from "../ui/Socials";
import Logo from "../ui/Logo";

const Sidebar = () => {
  return (
    <aside className="fixed dark:bg-dark-700 w-64 h-full border-r border-dark-300">
      <div className="p-4 flex flex-col">
        <Logo />
        <div className="mt-6 mb-11">
          <Navigation />
        </div>
        <Socials />
      </div>
    </aside>
  );
};

export default Sidebar;
