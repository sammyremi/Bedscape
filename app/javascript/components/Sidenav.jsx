import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useGlobalContext } from "./Context";
import { toast } from "react-toastify";
import {
  Dashboard_icon,
  Apartments_icon,
  Admin_icon,
  Log_icon,
} from "../images/icons";

const Sidenav = () => {
  // const { current_user, activeSideNav, setActiveSideNav } = useGlobalContext();

  //temp
  const [current_user, set] = useState("oladayo");
  const [activeSideNav, setActiveSideNav] = useState("dashboard");

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-16 left-0 w-1/6 h-screen"
      >
        <div className="h-full xl:px-3 py-6 xl:pl-5 overflow-y-auto">
          <ul className="xl:space-y-12 lg:space-y-6 mt-16 lg:text-base font-medium xl:text-xl">
            <li>
              <Link
                to="/"
                className={`flex items-center p-2 lg:pl-4 text-sky-700 xl:rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "dashboard" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("dashboard");
                }}
              >
                <Dashboard_icon />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/apartments"
                className={`flex items-center p-2 lg:pl-4 text-sky-700 xl:rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "apartments" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("apartments");
                }}
              >
                <Apartments_icon />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Apartments
                </span>
              </Link>
            </li>
            <li>
              <div
                className={`flex items-center cursor-pointer p-2 text-sky-700 rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "admin" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("admin");
                  if (
                    current_user?.admin === false ||
                    current_user?.admin === undefined
                  ) {
                    toast.error("Login as Admin");
                  } else {
                    window.location.href = "/admin";
                  }
                }}
              >
                <svg
                  fill="currentColor"
                  className="flex-shrink-0 w-7 h-7 dark:text-sky-700 transition duration-75 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-white"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Admin</span>
              </div>
            </li>
            <li>
              <Link
                to={"/sign_out"}
                className={` ${
                  current_user?.admin === undefined ? "hidden" : ""
                } flex items-center p-2 text-sky-700 rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "log" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("log");
                }}
              >
                <Admin_icon />
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </Link>
            </li>
            <li>
              <a
                href={"/users/sign_in"}
                className={` ${
                  current_user?.admin === undefined ? "" : "hidden"
                } flex items-center p-2 text-sky-700 rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "log" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("log");
                }}
              >
                <Log_icon />
                <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidenav;
