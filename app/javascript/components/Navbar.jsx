import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/newlogo.png";

const Navbar = () => {
  const font = {
    fontFamily: "'Josefin Sans', sans-serif",
  };

  return (
    <nav className="drop-shadow-md z-40 fixed w-full top-0 bg-[#E9F9FD]">
      <div className="mx-auto sm:px-6 lg:px-10">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                // src="https://www.outsourceglobal.com/logo.png"
                src={logo}
                alt="Your Company"
              />
            </div>

            <div className="ml-24">
              <h1
                style={font}
                className="text-[#066DA5] font-bold text-3xl mt-2"
              >
                DeskScape
              </h1>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Search bar */}
            <div className="flex ">
              <form className="flex items-center">
                <div className="relative w-60 outline-sky-700 pl-2 ">
                  <input
                    type="text"
                    placeholder="Search Desk_ID"
                    className="bg-gray-50 border outline-sky-300 border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-full block w-full py-1 px-2.5"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-1 bg-sky-200 hover:bg-sky-300 rounded-r-full"
                  >
                    <svg
                      className="w-7 h-7 text-gray-500 hover:text-gray-900"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 8L16 16"
                        stroke="#757575"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 8L8 16"
                        stroke="#757575"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Profile dropdown */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
