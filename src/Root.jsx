import React from "react";
import Navbar from "./COMPONENTS/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./COMPONENTS/shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-334px)] container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
