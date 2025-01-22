import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#161616_1px)] bg-[size:20px_20px]" />
      <div className="h-full w-full">
        <Sidebar />
        <div className="h-full relative ml-64">
          <main className="h-full">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
