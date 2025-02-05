import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const GlobalLayout = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="flex flex-col min-h-screen lg:pl-[240px]">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default GlobalLayout;
