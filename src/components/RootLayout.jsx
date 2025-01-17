import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
