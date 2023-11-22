import { Outlet, Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
import background from "../images/background.png";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          minHeight: "calc(100vh - 4rem)",
          background: `linear-gradient(rgb(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${background}) center/cover fixed no-repeat`,
        }}
        className="flex flex-row h-auto"
      >
        <div className="hidden lg:block lg:basis-1/6 h-auto border-r-2 z-20">
          <Sidenav />
        </div>
        <div
          className={`lg:basis-5/6 min-h-screen pt-20 px-4 z-0 mx-auto my-0`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default HomeLayout;
