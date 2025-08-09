import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div className="mb-20">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
