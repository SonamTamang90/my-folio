import { Outlet } from "react-router-dom";
import Sidebar, { MobileSidebar } from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";

const GlobalLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="relative min-h-screen">
      <button
        onClick={() => setIsMobile((prev) => !prev)}
        className="flex items-center gap-2 absolute top-4 left-8 bg-dark-200 py-1 px-2 rounded-md border border-dark-100 hover:bg-dark-200/80"
      >
        <HiBars3BottomLeft size={16} />
        <span>MENU</span>
      </button>

      <MobileSidebar isMobile={isMobile} setIsMobile={setIsMobile} />

      <Sidebar />

      <div className="flex flex-col min-h-screen lg:pl-[240px]">
        <Header />
        <main className="flex-1 overflow-y-auto lg:pb-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default GlobalLayout;
