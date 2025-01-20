import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#0D0D0B_1px)] bg-[size:20px_20px]" />
      <div className="h-full w-full">
        <Sidebar />
        <main className="relative ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
